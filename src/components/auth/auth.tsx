'use client';

import { useState } from 'react';
import styles from './auth.module.scss';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Auth({ onSignIn, onSignUp, onStateChange }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm();

  const emailValue = watch('email');

  let [isSubmitting, setIsSubmitting] = useState(false);
  let [isLogin, setIsLogin] = useState(true);

  const handleAuth = (form) => {
    const { email, password, confirmPassword } = form || {};

    if (isSubmitting) {
      return;
    }

    if (!email?.trim() || !password?.trim()) {
      return;
    }

    if (!isLogin && confirmPassword?.trim() !== password?.trim()) {
      setError('confirmPassword', { message: 'Паролі не співпадать' });

      return;
    }

    sendAuthRequest(form);
  };

  const sendAuthRequest = async (form) => {
    const { email, password, confirmPassword } = form || {};

    setIsSubmitting(true);

    if (isLogin) {
      await onSignIn(email, password, confirmPassword);

      router.push(`/`);
      localStorage.setItem('userId', '1');

      return;
    }

    await onSignUp(email, password, confirmPassword);

    router.push(`/`);
    localStorage.setItem('userId', '1');
  };

  const toggleState = () => {
    setIsLogin(!isLogin)
    onStateChange(!isLogin);
  };

  return (
    <section className={styles['auth-wrapper']}>
      <h4>{isLogin ? 'Вхід' : 'Реєстрація'}</h4>

      <form className={styles['form']} onSubmit={handleSubmit(handleAuth)}>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register('email', {
            required: true,
            pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
          })}
        />
        <input
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register('password', { required: true, pattern: /\S/ })}
        />
        {!isLogin && (
          <input
            type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('confirmPassword', { required: true, pattern: /\S/ })}
          />
        )}

        <Link href={'/restore-password?email=' + (emailValue || '')}>
          <button>Відновити пароль</button>
        </Link>

        <button type="submit" disabled={isSubmitting}>
          {isLogin ? 'Увійти' : 'Реєстрація'}
        </button>
      </form>

      <p>{isLogin ? 'Не маєте аккаунта?' : 'Вже маєте аккаунт?'}</p>

      <button onClick={() => toggleState()}>
        {isLogin ? 'Зареєструйтесь' : 'Вхід'}
      </button>
    </section>
  );
}
