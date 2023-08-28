import { api } from '@/utils/constand';

const getAllUsers = async () => {
  const res = await api.get<IUserApi[]>('/users');
  return res.data;
};

const getPostByUserId = async (id: string) => {
  const res = await api.get<IPostsApi[]>(`/posts?userId=${id}`);
  return res.data;
};

export { getAllUsers, getPostByUserId };
