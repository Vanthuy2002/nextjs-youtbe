import { toUpperCase } from '@/utils/constand';
import { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPostByUserId } from '@/services/user.services';

const PostOfUser = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPostByUserId(id),
    staleTime: 1 * 60 * 1000,
  });

  return (
    <Fragment>
      <ul className='flex flex-col gap-y-2'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Fragment>
            {data &&
              data.length > 0 &&
              data.map((post) => (
                <li className='mb-2' key={post.id}>
                  <p className='font-medium text-lg'>
                    {toUpperCase(post.title)}
                  </p>
                  <p className='text-sm'>{post.body}</p>
                </li>
              ))}
          </Fragment>
        )}
      </ul>
    </Fragment>
  );
};

export default PostOfUser;
