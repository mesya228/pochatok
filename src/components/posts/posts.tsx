'use client';

import { memo } from 'react';
import styles from './posts.module.scss';
import Post from '../post/post';
import { useFeedStore } from '@/store';

function Posts() {
  const { posts } = useFeedStore() as any;

  if (!posts) {
    return;
  }

  return (
    <div className={styles['posts']}>
      {posts?.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
}

export default memo(Posts);
