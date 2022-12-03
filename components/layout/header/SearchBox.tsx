import React from 'react';
import { GoSearch } from 'react-icons/go';

const SearchBox = () => {
  return (
    <div className='relative w-full max-w-md sm:-ml-2'>
      <GoSearch className='absolute h-6 w-6 mt-2.5 ml-2 text-gray-400' />
      <input
        type='text'
        role='search'
        placeholder='Search...'
        className='py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg'
      />
    </div>
  );
};

export default SearchBox;
