import React, { useState, useEffect } from 'react';
import { ProviderList } from './';
import styles from './Comparison.module.css';

async function fetchConsumptionData() {
  return await fetch('/api/consumption').then((res) => res.json());
}

async function fetchProvidersData() {
  return await fetch('/api/providers').then((res) => res.json());
}

export default function ComparisonModule() {
  const [consumptionData, setConsumptionData] = useState(null);
  const [providersData, setProvidersData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [annualConsumption, setAnnualConsumption] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Promise.all([fetchConsumptionData(), fetchProvidersData()]).then(
      ([consumption, providers]) => {
        setConsumptionData(consumption);
        setProvidersData(providers);
      }
    );
  }, []);

  if (!consumptionData || !providersData)
    return <div className={styles.container}>Loading...</div>;
  const convertedConsumptionData = consumptionData.map((item) => {
    return {
      month: new Date(item.to).getMonth(),
      consumption: item.consumption,
    };
  });

  const convertedProvidersData = providersData.map((item) => {
    const convertedItem = {
      name: item.name,
      pricingModel: item.pricingModel,
      monthlyFee: item.monthlyFee,
    };

    if (item.pricingModel === 'fixed') {
      convertedItem.price = item.fixedPrice;
      convertedItem.pricePeriod = item.fixedPricePeriod;
    } else if (item.pricingModel === 'variable') {
      convertedItem.price = item.variablePrice;
      convertedItem.pricePeriod = item.variablePricePeriod;
    } else if (item.pricingModel.startsWith('spot')) {
      convertedItem.price = item.spotPrice;
    }

    return convertedItem;
  });

  const winterConsumption =
    convertedConsumptionData.reduce((sum, item) => sum + item.consumption, 0) /
    consumptionData.length;

  const seasonConsumptionRates = {
    winter: 1.0,
    spring: 0.8,
    summer: 0.6,
    fall: 0.8,
  };

  function daysInSeason(season) {
    const days = {
      winter: 90,
      spring: 92,
      summer: 92,
      fall: 91,
    };
    return days[season];
  }

  const annualConsumption_ = Object.keys(seasonConsumptionRates).reduce(
    (sum, season) => {
      return (
        sum +
        winterConsumption *
          seasonConsumptionRates[season] *
          daysInSeason(season)
      );
    },
    0
  );

  const monthlyConsumption = (month) => {
    let season;
    if (month >= 1 && month <= 3) {
      season = 'winter';
    } else if (month >= 4 && month <= 6) {
      season = 'spring';
    } else if (month >= 7 && month <= 9) {
      season = 'summer';
    } else {
      season = 'fall';
    }
    const monthlyConsumption =
      (annualConsumption / 12) * seasonConsumptionRates[season];
    return monthlyConsumption;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Validate input to allow only numbers in the range from 0 to 2000000
    if (/^\d*$/.test(value) && Number(value) >= 0 && Number(value) <= 2000000) {
      setInputValue(value);
    }
  };

  const handleCalculateConsumption = () => {
    setInputValue(Math.round(annualConsumption_));
  };

  const handleCalculatePrices = () => {
    if (inputValue !== '') {
      setAnnualConsumption(inputValue);
      setIsOpen(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.comparisonContainer}>
          <h1 className={styles.h1}>Compare deals</h1>
          <div className={styles.contentWrapper}>
            <div className={styles.leftContent}>
              <h2>Fill in the annual electricity consumption</h2>
              <p className={styles.p}>
                Seen on your invoice. We use this to calculate the total price.
              </p>
            </div>
            <div className={styles.rightContent}>
              <input
                className={styles.input}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Calculated annual power consumption"
              />
              <div>
                <p className={styles.p}>
                  We can calculate your annual consumption based on your
                  consumption the past 500 hours. Click here to try it.
                </p>
                <button
                  className={styles.button}
                  onClick={handleCalculateConsumption}
                >
                  Calculate yearly consumption
                </button>
              </div>
            </div>
          </div>
          <button
            className={styles.buttonCheckPrices}
            onClick={handleCalculatePrices}
          >
            Check Prices
          </button>
        </div>
        <div>
          {isOpen && (
            <ProviderList
              providers={convertedProvidersData}
              monthlyConsumption={monthlyConsumption}
            />
          )}
        </div>
      </div>
    </div>
  );
}
