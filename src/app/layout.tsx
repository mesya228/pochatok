import { userStore } from '@/store'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import UserStoreInit from '@/store/user/user-init'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await fetch('https://jsonplaceholder.typicode.com/users/1').then((res) => res.json());

  userStore.setState({ user });

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserStoreInit data={{user}}></UserStoreInit>

        {children}
      </body>
    </html>
  )
}
