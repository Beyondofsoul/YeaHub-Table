import SpecializationCard from '@/entities/SpecializationsCard/ui/SpecializationCard/SpecializationCard';
import styles from './styles.module.css';

function SpecializationsList() {
  return (
    <ul className={styles.questionsList}>
      <SpecializationCard />
    </ul>
  );
}

export default SpecializationsList;
