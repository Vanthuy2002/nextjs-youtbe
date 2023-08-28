import { baseURL } from '@/utils/constand';
import Link from 'next/link';
import { useEffect, useState, Fragment } from 'react';

const ListUsers = () => {
  const [users, setUser] = useState<IUserApi[]>([]);

  const getAllUsers = async () => {
    const res = await fetch(`${baseURL}/users`);
    const data: IUserApi[] = await res.json();
    setUser(data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Fragment>
      <h1 className='my-6 font-medium text-lg'>
        ListUsers have {users?.length} users
      </h1>
      <ul className='flex flex-col gap-y-2'>
        {users.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <Fragment>
            {users &&
              users.length > 0 &&
              users.map((user) => (
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
