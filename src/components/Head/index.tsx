import React from 'react';

const Head = ({
  title,
  desc = 'Create by Thuy Nguyen',
}: {
  title: string;
  desc?: string;
}) => {
  return (
    <React.Fragment>
      <title>{title}</title>
      <meta name='description' content={desc}></meta>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='shortcut icon' href='../favicon.ico' type='image/x-icon' />
    </React.Fragment>
  );
};

export default Head;
