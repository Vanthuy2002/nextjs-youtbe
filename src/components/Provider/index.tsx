'use client';
import React, { Fragment } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProviderApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      {children}
      <ProgressBar
        height='4px'
        color='#b0b08d'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Fragment>
  );
};

export default ProviderApp;
