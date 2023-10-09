'use client';

import { memo, useMemo, useState } from 'react';
import styles from './post.module.scss';

function Post({ post }) {
  const [isCopied, setIsCopied] = useState(false);

  const setCopiedTimer = () => {
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const copyCardNumber = () => {
    navigator.clipboard.writeText('test');
    setIsCopied(true);
    setCopiedTimer();
  };

  const isCardCopied = useMemo(() => {
    return isCopied;
  }, [isCopied]);

  return (
    <section className={styles['post-card']}>
      <p className={styles['post-header']}>
        {post?.name}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse, voluptates nihil nisi sunt aspernatur
        dolorum! Optio mollitia aliquam quas.
      </p>

      <div className={styles['post-content']}>
        <p>
          {post?.name}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis consectetur consequuntur rem cumque,
          excepturi soluta! Labore voluptatum dignissimos fuga quos laudantium voluptates iste corporis, magni vel.
          Commodi sint, voluptas, nesciunt recusandae ex perferendis dicta itaque atque explicabo fugiat vero excepturi,
          asperiores distinctio totam consectetur esse quam soluta eum nemo quibusdam.
        </p>
      </div>

      <div className={styles['post-actions']}>
        {post?.test ?? (
          <a
            href="https://send.monobank.ua/jar/74bs4QsTa" target="_blank" rel="noreferrer">
            Відкрити банку
          </a>
        )}

        {post?.test ?? (
          <button
            onClick={() => copyCardNumber()}>
            {isCardCopied ? 'Скопійовано' : 'Номер картки: 8888 8888 8888 8888'}
          </button>
        )}
      </div>
    </section>
  );
}

export default memo(Post);
