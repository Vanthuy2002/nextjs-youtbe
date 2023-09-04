import { api } from '@/utils/constand';
import { NextResponse } from 'next/server';

interface Props {
  params: {
    id: string;
  };
}

async function GET(request: Request, { params }: Props) {
  const id = request.url.slice(request.url.lastIndexOf('/') + 1);
  const res = await api.get<Todo>(`todos/${id}`);
  const todo = res.data;

  if (!todo.id) return NextResponse.json({ message: 'Todo not found' });

  return NextResponse.json(todo);
}

export { GET };
