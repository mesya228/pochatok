'use client';

import { useFeedStore } from '@/store';
import { useRef } from 'react';

export default function FeedStoreInit({ data }) {
  const isInit = useRef(false);

  if (!isInit.current) {
    useFeedStore.setState({ posts: data });
    isInit.current = true;
  }

  return null;
}
