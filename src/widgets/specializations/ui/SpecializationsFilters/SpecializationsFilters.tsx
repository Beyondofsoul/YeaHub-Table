import styles from './styles.module.css';

function SpecializationsFilters() {
  return (
    <ul className={styles.specializationsInfo}>
      <input type="checkbox" className={styles.checkbox} />
      <p>Картинка</p>
      <p>Название</p>
      <p>Описание</p>
      <p>Навыки</p>
    </ul>
  );
}

export default SpecializationsFilters;
