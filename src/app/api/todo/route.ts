import { api } from '@/utils/constand';
import { NextResponse } from 'next/server';

const KEY: string = process.env.DATA_API_KEY as string;

async function GET() {
  const res = await api.get<Todo[]>('todos');
  const todos = res.data;

  return NextResponse.json(todos);
}

async function POST(request: Request) {
  const { title, userId }: Partial<Todo> = await request.json();

  if (!title || !userId)
    return NextResponse.json({ message: 'Required missing data from client' });

  const res = await api.post<Todo>(
    'todos',
    { title, userId, completed: false },
    {
      headers: {
        'Content-Type': 'application/json',
        API_KEY: KEY,
      },
    }
  );
  const newTodo: Todo = res.data;

  return NextResponse.json(newTodo);
}

async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();

  if (!id)
    return NextResponse.json({ message: 'Please select an ID to remove' });

  await api.delete<Todo>(`todos/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      API_KEY: KEY,
    },
  });

  return NextResponse.json({ message: 'Delete todo successfully!!!' });
}

async function PUT(request: Request) {
  const { userId, id, title, completed }: Todo = await request.json();
  if (!userId || !title || typeof completed !== 'boolean') {
    return NextResponse.json({ message: 'Missing required data from client' });
  }

  const res = await api.put<Todo>(
    `todos/${id}`,
    { userId, title, completed },
    {
      headers: {
        'Content-Type': 'application/json',
        API_KEY: KEY,
      },
    }
  );

  return NextResponse.json(res.data);
}

export { GET, POST, DELETE, PUT };
