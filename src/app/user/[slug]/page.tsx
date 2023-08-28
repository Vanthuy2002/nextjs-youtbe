import { Fragment } from 'react';
import Head from '@/components/Head';
import Link from 'next/link';
import PostOfUser from '@/modules/User/PostOfUser';
import { api } from '@/utils/constand';

type UserIdProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const res = await api.get<IUserApi[]>(`/users`);
  const users = res.data;

  return users.map((user) => ({
    slug: user.id.toString(),
  }));
}

const UserDetail = ({ params }: UserIdProps) => {
  const { slug } = params;
  const title = slug ? `Details of ${slug}` : 'Not found Id';

  return (
    <Fragment>
      <Head title={title} desc={`Create by ${slug}`} />
      <h1 className='my-5 font-medium'>User Pages details of {slug}</h1>
      <Link className='text-blue-500 hover:underline' href='/user'>
        User
      </Link>

      <p className='font-medium text-xl mb-2 text-gray-500'>
        Post commented by userId {slug}
      </p>
      <PostOfUser id={slug} />
    </Fragment>
  );
};

export default UserDetail;
