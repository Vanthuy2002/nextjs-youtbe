'use client';
import Link from 'next/link';
import { Fragment } from 'react';
import Head from './head';

const AboutPage = () => {
  return (
    <Fragment>
      <Head />
      <h1 className='text-xl font-medium'>This is About Pages</h1>
      <Link className='text-blue-500 hover:underline' href='/'>
        Home
      </Link>
    </Fragment>
  );
};

export default AboutPage;
