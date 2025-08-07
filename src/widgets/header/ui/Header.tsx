import styles from './styles.module.css';
import logo from '@/shared/assets/logo.svg';
function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.img} />
    </header>
  );
}

export default Header;
