import { NextResponse } from 'next/server';

const allowedOrigins =
  process.env.NODE_ENV === 'production'
    ? ['https://www.yoursite.com', 'https://yoursite.com']
    : ['http://localhost:3000'];

function middleware(request: Request) {
  const origin = request.headers.get('origin');

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Bad Request',
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  console.log('Hey middleware!!!');
  console.log(request.url);
  console.log(request.method);

  console.log('🚀 ~ middleware ~ origin:', origin);

  return NextResponse.next();
}

export const config = {
  matcher: ['/user/:path*', '/api/:path*'],
};

export { middleware };
