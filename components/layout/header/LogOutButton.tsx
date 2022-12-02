import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';

const LogOutButton = () => {
  return (
    <button className='relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full'>
      <span className='sr-only'>Log out</span>
      <AiOutlineLogout className='h-6 w-6' />
    </button>
  );
};

export default LogOutButton;
