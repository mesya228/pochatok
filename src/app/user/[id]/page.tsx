import { MainLayout } from '@/layouts';
import Head from 'next/head';
import UserPage from '@/components/user-page/user-page';

export default async function User({ params }) {
  let user;

  if (params?.id) {
    user = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`, { method: 'GET' }).then((res) => res.json());
  }

  return (
    <MainLayout>
      <Head>
        <title>Користувач</title>
      </Head>

      <UserPage user={user}></UserPage>
    </MainLayout>
  );
}
