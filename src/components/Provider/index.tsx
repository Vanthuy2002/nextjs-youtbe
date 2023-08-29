'use client';
import React, { Fragment } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

const ProviderApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
        <ProgressBar
          height='4px'
          color='#3664fc'
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Toaster />
      </QueryClientProvider>
    </Fragment>
  );
};

export default ProviderApp;
