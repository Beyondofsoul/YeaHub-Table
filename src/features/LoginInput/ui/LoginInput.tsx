import { Input } from '@/shared/ui/Input';
import styles from './styles.module.css';
import { Button } from '@/shared/ui/button';
import { useLoginMutation } from '../api/authApi';
import { useFormContext } from 'react-hook-form';
import { LoginFormValues } from '../model/types/auth';
import { useNavigate } from 'react-router-dom';

function LoginInput() {
  const [loginMutation, { isLoading }] = useLoginMutation();
  const { handleSubmit, register } = useFormContext<LoginFormValues>();
  const navigate = useNavigate();
  const onLogin = async (data: LoginFormValues) => {
    try {
      const result = await loginMutation(data).unwrap();
      console.log('Вход успешен:', result);
      // Перенаправление после успеха
      navigate('/page');
    } catch (error) {
      console.error('Ошибка входа:', error);
    }
  };
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Вход в личный кабинет</h2>
      <form onSubmit={handleSubmit(onLogin)}>
        <div className={styles.email}>
          <Input placeholder="Введите имя пользователя" {...register('username')} />
        </div>
        <div className={styles.email}>
          <p>Пароль</p>
          <Input placeholder="Пароль" {...register('password')} />
        </div>
        <Button className={styles.btn} disabled={isLoading}>
          Вход
        </Button>
      </form>
    </section>
  );
}

export default LoginInput;
