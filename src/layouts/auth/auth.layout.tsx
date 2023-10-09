import { Header } from '@/components';
import Head from 'next/head';
import styles from './layout.module.scss';

const siteTitle = 'Pochatok - Головна';

export function AuthLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <Header></Header>

      <main className={styles['main-wrapper']}>{children}</main>
    </>
  );
}
