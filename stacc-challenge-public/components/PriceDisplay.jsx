import React, { useState, useEffect } from 'react';
import styles from './PriceDisplay.module.css';
import Chart from './Chart';

async function fetchData() {
  const response = await fetch(
    'http://localhost:3306/electricityprice?year=2023&month=01&day=06'
  );
  //'https://www.hvakosterstrommen.no/api/v1/prices/2023/01-06_NO1.json'
  const data = await response.json();
  return data;
}
async function fetchConsumptionData() {
  return await fetch('/api/consumption').then((res) => res.json());
}

export default function PriceDisplay() {
  const [data, setData] = useState(null);
  const [consumptionData, setConsumptionData] = useState(null);
  const [showCost, setShowCost] = useState(false);
  const [showPrice, setShowPrice] = useState(true);
  const [showConsumption, setShowConsumption] = useState(false);

  useEffect(() => {
    Promise.all([fetchData(), fetchConsumptionData()]).then(
      ([priceData, consumptionData]) => {
        const mergedData = priceData.map((priceItem) => {
          const priceHour = new Date(priceItem.time_start).getHours();
          const consumptionItem = consumptionData.find((consumptionItem) => {
            const consumptionFromHour = new Date(
              consumptionItem.from
            ).getHours();
            return priceHour === consumptionFromHour;
          });

          return {
            hour: priceHour,
            price: priceItem.NOK_per_kWh,
            cost:
              priceItem.NOK_per_kWh *
              (consumptionItem ? consumptionItem.consumption : 0),
            consumption: consumptionItem ? consumptionItem.consumption : 0,
          };
        });

        setConsumptionData(consumptionData);
        setData(mergedData);
      }
    );
  }, []);
  if (!data || !consumptionData) {
    return (
      <div className={styles.container}>
        <div className={styles.price_card}> </div>
      </div>
    );
  }

  const filteredData = data.map((item) => ({
    ...item,
    cost: showCost ? item.cost : null,
    price: showPrice ? item.price : null,
    consumption: showConsumption ? item.consumption : null,
  }));

  return (
    <div className={styles.container}>
      <div className={styles.price_card}>
        <h2>Electricity prices and your consumption in kWh</h2>
        <p>
          Below you will find the electricity prices within the relevant price
          ranges retrieved from hvakosterstrommen.no. You can aloso see your
          consumption and how much each hour costs you.
        </p>
        <h3>Today's electricity prices</h3>
        <div className={styles.chart_container}>
          <div className={styles.checkboxes}>
            <input
              type="checkbox"
              checked={showCost}
              onChange={() => setShowCost(!showCost)}
              className={styles.custom_checkbox}
              id="cost-checkbox"
            />
            <label
              htmlFor="cost-checkbox"
              className={styles.custom_checkbox_label}
            >
              Cost
            </label>
            <input
              type="checkbox"
              checked={showPrice}
              onChange={() => setShowPrice(!showPrice)}
              className={styles.custom_checkbox}
              id="price-checkbox"
            />
            <label
              htmlFor="price-checkbox"
              className={styles.custom_checkbox_label}
            >
              Price
            </label>
            <input
              type="checkbox"
              checked={showConsumption}
              onChange={() => setShowConsumption(!showConsumption)}
              className={styles.custom_checkbox}
              id="consumption-checkbox"
            />
            <label
              htmlFor="consumption-checkbox"
              className={styles.custom_checkbox_label}
            >
              kWh
            </label>
          </div>
          <Chart data={filteredData} />
        </div>
      </div>
    </div>
  );
}
