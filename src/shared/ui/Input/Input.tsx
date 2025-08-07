import { ChangeEvent } from 'react';
import styles from './styles.module.css';

interface Props {
  onChange?: (arg: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder: string;
}

function Input({ onChange, value, placeholder, ...props }: Props) {
  return (
    <div className={styles.block}>
      <input
        className={styles.input}
        {...props}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default Input;
