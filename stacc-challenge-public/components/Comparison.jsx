import React, { useState, useEffect } from 'react';
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
      <div>
        <h1>Compare deals</h1>
        <input></input>
        <div>
          <p></p>
          <button></button>
        </div>
        <button></button>
      </div>
    </div>
  );
}
