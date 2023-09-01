import React, { useState, useEffect } from 'react';
import styles from './ProviderCard.module.css';

export default function ProviderCard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMoreInfo = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p>ProviderName</p>
        <p>Cost øre/kWh</p>
        <p>Total Cost</p>
      </div>
      <div className={styles.cardInformation}>
        <div className={styles.cardInfoBubbles}>
          <div className={styles.cardInfoBubble}>No binding</div>
          <div className={styles.cardInfoBubble}>SpotPrice</div>
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
