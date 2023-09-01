import React, { useState, useEffect } from 'react';
import { ProviderCard } from './';
import styles from './Comparison.module.css';

async function fetchConsumptionData() {
  return await fetch('/api/consumption').then((res) => res.json());
}

export default function ComparisonModule() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchConsumptionData().then((data) => setData(data));
  }, []);

  if (!data) return <div className={styles.container}>Loading...</div>;
  const convertedData = data.map((item) => {
    return {
      consumption: item.consumption,
    };
  });

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
          <div>
            <p>List of choices</p>
          </div>
          <ProviderCard />
        </div>
      </div>
    </div>
  );
}
