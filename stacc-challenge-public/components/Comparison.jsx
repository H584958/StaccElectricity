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

  const annualConsumption = Object.keys(seasonConsumptionRates).reduce(
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

  console.log(annualConsumption);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <h1>Compare deals</h1>
          <p>Enter your yearly consumption</p>
          <input></input>
          <div>
            <p>Based on you consumption</p>
            <button>Calculate yearly consumption</button>
          </div>
          <button>Check Prices</button>
        </div>
        <div>
          <ProviderList providers={convertedProvidersData} />
        </div>
      </div>
    </div>
  );
}
