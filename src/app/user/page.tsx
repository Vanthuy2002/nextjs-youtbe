'use client';
import React from 'react';
import Link from 'next/link';
import Head from '@/components/Head';
import { ListUsers } from '@/modules/User';
import Button from '@/components/Button';
import { toast } from 'react-hot-toast';

const UserPage = () => {
  return (
    <React.Fragment>
      <Head title='User Pages' />
      <h1 className='text-xl font-medium'>User Pages</h1>

      <article className='flex items-center gap-3 mt-5'>
        <Link className='hover:underline text-blue-400' href='/'>
          Home
        </Link>

        <Button onClick={() => toast.success('Create toast succeed!!')}>
          Show Toast
        </Button>
      </article>
      <ListUsers />
    </React.Fragment>
  );
};

export default UserPage;
