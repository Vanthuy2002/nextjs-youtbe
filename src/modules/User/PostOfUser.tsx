/* eslint-disable react-hooks/exhaustive-deps */
import { baseURL, toUpperCase } from '@/utils/constand';
import { useState, useEffect, Fragment } from 'react';

const PostOfUser = ({ id }: { id: string }) => {
  const [posts, setPost] = useState<IPostsApi[]>([]);

  const getPostById = async () => {
    const res = await fetch(`${baseURL}/posts?userId=${id}`);
    const data: IPostsApi[] = await res.json();
    setPost(data);
  };

  useEffect(() => {
    getPostById();
  }, []);

  return (
    <Fragment>
      <ul className='flex flex-col gap-y-2'>
        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <Fragment>
            {posts.length > 0 &&
              posts.map((post) => (
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
