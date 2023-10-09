'use client';

import Link from 'next/link';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles['header-wrapper']}>
      <div className={styles['header-content']}>
        <Link
          href='/user/1'
          className='btn'
        >
          Користувач
        </Link>

        <Link href="/" className='default'>
          <h1>Pochatok</h1>
        </Link>

        <Link
          href='/settings'
          className='btn'
        >
          Налаштування
        </Link>
      </div>
    </header>
  );
}
