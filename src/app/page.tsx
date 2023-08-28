'use client';
import Link from 'next/link';
import { Fragment } from 'react';
import Head from './head';

export default function Home() {
  return (
    <Fragment>
      <Head />
      <main>
        <h1 className='font-medium text-xl italic'>Hello Nextjs</h1>
        <Link className='hover:underline text-blue-400' href='/about'>
          About
        </Link>
      </main>
    </Fragment>
  );
}
