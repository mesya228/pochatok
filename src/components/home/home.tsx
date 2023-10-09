import { useFeedStore } from '@/store';
import Posts from '../posts/posts';
import FeedStoreInit from '@/store/feed/feed-init';

export default async function Home() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

  useFeedStore.setState({ posts });

  return (
    <>
      <FeedStoreInit data={posts}></FeedStoreInit>

      <Posts></Posts>
    </>
  );
}
