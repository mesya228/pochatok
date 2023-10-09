'use client';

import { userStore } from '@/store';
import { useRef } from 'react';

export default function UserStoreInit({ data }) {
  const isInit = useRef(false);

  if (!isInit.current) {
    userStore.setState(data);
    isInit.current = true;
  }

  return null;
}
