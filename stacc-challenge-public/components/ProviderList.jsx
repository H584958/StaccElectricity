import React from 'react';
import styles from './ProviderList.module.css';
import { ProviderCard } from './';

export default function ProviderList({ providers, monthlyConsumption }) {
  return (
    <div className={styles.providerList}>
      <div className={styles.listHeader}>
        <div className={styles.headerItem}>Providers</div>
        <div className={styles.headerItem}>Price per kWh</div>
        <div className={styles.headerItem}>
          Total calculated price for previous month
        </div>
      </div>
      <div className={styles.cardList}>
        {providers.map((provider, index) => (
          <ProviderCard
            key={index}
            provider={provider}
            monthlyConsumption={monthlyConsumption}
          />
        ))}
      </div>
    </div>
  );
}
