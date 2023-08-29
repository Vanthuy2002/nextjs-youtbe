'use client';
import Head from '@/components/Head';
import Link from 'next/link';
import { Fragment } from 'react';

const menuList = [
  { id: 1, title: 'About', to: '/about' },
  { id: 2, title: 'User', to: '/user' },
  { id: 3, title: 'Feedback', to: '/feedback' },
];

export default function Home() {
  return (
    <Fragment>
      <Head title='Home Pages' />
      <main>
        <h1 className='font-medium text-xl italic'>Hello Nextjs</h1>
        <div className='flex items-center gap-3'>
          {menuList.map((menu) => (
            <Link
              key={menu.id}
              className='hover:underline text-blue-400'
              href={menu.to}
            >
              {menu.title}
            </Link>
          ))}
        </div>
      </main>
    </Fragment>
  );
}
