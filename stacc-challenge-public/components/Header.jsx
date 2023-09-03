import styles from './Header.module.css';
export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img
          className={styles.logo}
          src="./android-chrome-192x192.png"
          alt="Logo"
        />
        <h1> Stacc </h1>
      </header>
      <h2 className={styles.toptext}>⚡ Electricity usage ⚡</h2>
    </div>
  );
}
