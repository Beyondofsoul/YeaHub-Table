import Header from '@/widgets/header/ui/Header';
import styles from './styles.module.css';

import LoginInput from '@/features/LoginInput/ui/LoginInput';
import { LoginFormValues } from '@/features/LoginInput/model/types/auth';
import { FormProvider, useForm } from 'react-hook-form';

function AuthPage() {
  const methods = useForm<LoginFormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <FormProvider {...methods}>
            <LoginInput />
          </FormProvider>
        </div>
      </main>
    </>
  );
}

export default AuthPage;
