import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data: IFeedback = await request.json();
  const { email, message, name } = data;

  return NextResponse.json({ name, message, email });
}
