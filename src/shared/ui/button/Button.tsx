import clsx from 'clsx';
import styles from './styles.module.css';
import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ className, children, onClick, disabled, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, className)}
      {...props}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
