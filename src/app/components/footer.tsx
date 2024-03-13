import styles from '../style-modules/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles['footer-container']}>
      <p className={styles['footer-text']}>
        Copyright &copy; 2023
        <br />
        By LMNT Application Development
        <br />
        All Rights Reserved
      </p>
    </div>
  );
}