import React, { useState } from 'react';
import styles from './ProviderCard.module.css';

export default function ProviderCard({ provider, monthlyConsumption }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMoreInfo = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p>{provider.name}</p>
        <p>{provider.price} kWh</p>
        <p>{Math.round(monthlyConsumption(provider.month))} NOK</p>
      </div>
      <div className={styles.cardInformation}>
        <div className={styles.cardInfoBubbles}>
          <div className={styles.cardInfoBubble}>{provider.pricingModel}</div>
          {provider.pricePeriod && (
            <div className={styles.cardInfoBubble}>
              Fixed price period: {provider.pricePeriod} months
            </div>
          )}
        </div>
        <div className={styles.seeMore}>
          <button className={styles.button} onClick={toggleMoreInfo}>
            {isOpen ? 'See less' : 'See more'}
          </button>
        </div>
      </div>
      {isOpen && <div className={styles.moreInfo}>Test</div>}
    </div>
  );
}
