'use client';

import styles from './user.module.scss';

export default function UserPage({ user }) {
  return (
    <section className={styles['user-wrapper']}>
      User {user?.name}
    </section>
  );
}
