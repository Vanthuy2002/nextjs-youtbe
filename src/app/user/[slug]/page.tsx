'use client';
import { Fragment } from 'react';
import { useParams } from 'next/navigation';
import Head from '@/components/Head';
import Link from 'next/link';
import PostOfUser from '@/modules/User/PostOfUser';

const UserDetail = () => {
  const { slug } = useParams();

  return (
    <Fragment>
      <Head title={`Detail of ${slug}`} desc={`Create by ${slug}`} />
      <h1 className='my-5 font-medium'>User Pages details of {slug}</h1>
      <Link className='text-blue-500 hover:underline' href='/user'>
        User
      </Link>

      <p className='font-medium text-xl mb-2 text-gray-500'>
        Post commented by userId {slug}
      </p>
      <PostOfUser id={slug as string} />
    </Fragment>
  );
};

export default UserDetail;
