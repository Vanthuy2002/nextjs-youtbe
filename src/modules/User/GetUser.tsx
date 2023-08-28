import Link from 'next/link';
import { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '@/services/user.services';

const ListUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
  });

  return (
    <Fragment>
      <h1 className='my-6 font-medium text-lg'>
        ListUsers have {data?.length} users
      </h1>
      <ul className='flex flex-col gap-y-2'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Fragment>
            {data &&
              data.length > 0 &&
              data.map((user) => (
                <li key={user.id}>
                  <Link href={`/user/${user.id}`}>{user.email}</Link>
                </li>
              ))}
          </Fragment>
        )}
      </ul>
    </Fragment>
  );
};

export default ListUsers;
