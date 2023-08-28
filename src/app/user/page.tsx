'use client';
import React from 'react';
import Link from 'next/link';
import Head from '@/components/Head';
import { ListUsers } from '@/modules/User';

const UserPage = () => {
  return (
    <React.Fragment>
      <Head title='User Pages' />
      <h1 className='text-xl font-medium'>User Pages</h1>
      <Link className='hover:underline text-blue-400' href='/'>
        Home
      </Link>
      <ListUsers />
    </React.Fragment>
  );
};

export default UserPage;
