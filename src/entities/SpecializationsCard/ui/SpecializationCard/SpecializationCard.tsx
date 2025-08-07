import styles from './styles.module.css';

function SpecializationCard() {
  return (
    <li className={styles.card}>
      <input type="checkbox" className={styles.checkbox} />

      <img src="" alt="" className={styles.image} />
      <div className={styles.cardContent}>
        <p className={styles.title}>Название Специальности</p>
        <button>Развернуть</button>
      </div>
      <p className={styles.description}>Описание</p>
      <div className={styles.skills}>Навыки</div>
    </li>
  );
}

export default SpecializationCard;
