import React from 'react';

const Button = (props: ButtonProps) => {
  const { children } = props;
  return (
    <button
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5'
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
