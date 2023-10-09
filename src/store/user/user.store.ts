import { create } from 'zustand';

export const userStore = create<{
  user: { name: string } | null;
}>(() => ({
  user: null,
}));
