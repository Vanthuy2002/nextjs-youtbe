'use client';
import Head from '@/components/Head';
import Link from 'next/link';
import { Fragment } from 'react';

const AboutPage = () => {
  return (
    <Fragment>
      <Head title='About Pages' />
      <h1 className='text-xl font-medium'>This is About Pages</h1>
      <Link className='text-blue-500 hover:underline' href='/'>
        Home
      </Link>
    </Fragment>
  );
};

export default AboutPage;
