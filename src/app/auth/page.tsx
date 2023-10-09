'use client';

import Head from 'next/head';
import { AuthLayout } from '@/layouts';
import { Auth } from '@/components/auth/auth';

export default function AuthContainer() {
  let isLogin: boolean = false;

  const signIn = async (email: string, password: string, confirmPassword: string) => {
    return await fetch('http://localhost:8000/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
      }),
    }).catch(() => null);
  };

  const signUp = async (email: string, password: string, confirmPassword: string) => {
    return await fetch('http://localhost:8000/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
      }),
    }).catch(() => null);
  };

  const onStateChange = (state) => {
    isLogin = state;
  };

  return (
    <AuthLayout>
      <Head>
        <title>{isLogin ? 'Вхід' : 'Реєстрація'}</title>
      </Head>

      <Auth onSignIn={signIn} onSignUp={signUp} onStateChange={onStateChange}></Auth>
    </AuthLayout>
  );
}
