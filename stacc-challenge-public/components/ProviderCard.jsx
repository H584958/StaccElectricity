import React, { useState } from 'react';
import styles from './ProviderCard.module.css';

export default function ProviderCard({ provider, monthlyConsumption }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMoreInfo = () => {
    setIsOpen(!isOpen);
  };

  const monthlyConsumption_ = monthlyConsumption(provider.month);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p>{provider.name}</p>
        <p>{provider.price.toFixed(2)} kWh</p>
        <p>{(monthlyConsumption_ * 1.25 * provider.price).toFixed(2)} NOK</p>
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
      {isOpen && (
        <div className={styles.moreInfo}>
          <div>
            <div>
              <header>
                <h3>Price breakdown</h3>
                <p>All the numbers are stated in Norwegian Cents/kWh </p>
              </header>
            </div>
            <div>
              <div className={styles.providerCard}>
                <div className={styles.providerInfo}>
                  <h4>Price on the power exchange</h4>
                  <p>
                    Average monthly price during the {provider.month} month.
                  </p>
                </div>
                <div className={styles.providerPrice}>
                  {(monthlyConsumption_ * provider.price).toFixed(2)}
                </div>
              </div>
              <div className={styles.providerCard2}>
                <div className={styles.providerInfo}>
                  <h4>Fixed fees</h4>
                  <p>No fixed start/monthly or annual fees.</p>
                </div>
                <div className={styles.providerPrice}>
                  {provider.monthlyFee.toFixed(2)}
                </div>
              </div>
              <div className={styles.providerCard}>
                <div className={styles.providerInfo}>
                  <h4>VAT</h4>
                  <p>Value added tax 25%</p>
                </div>
                <div className={styles.providerPrice}>
                  {(monthlyConsumption_ * provider.price * 0.25).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.providerCardTotal}>
            <div>
              <h4>Total</h4>
            </div>
            <div>
              <p>{(monthlyConsumption_ * provider.price * 1.25).toFixed(2)}</p>
              <p>cent/kWh</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
