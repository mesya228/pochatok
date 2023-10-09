'use client';

import Head from 'next/head';
import styles from './settings.module.scss';
import { MainLayout } from '@/layouts';
import { AuthGuard } from '@/guards/auth-guard';
import { userStore } from '@/store';

export default function Settings() {
  const state = userStore.getState();

  return (
    <MainLayout>
      <Head>
        <title>Налаштування</title>
      </Head>

      <AuthGuard></AuthGuard>

      <section className={styles['user-wrapper']}>
        Налаштування { state?.user?.name }
      </section>
    </MainLayout>
  );
}
