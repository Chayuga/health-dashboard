import React from 'react';
import { MdMenu } from 'react-icons/md';

import LogOutButton from './header/LogOutButton';
import SearchBox from './header/SearchBox';
import UserMenu from './header/UserMenu';

const Header = () => {
  return (
    <header className='flex items-center h-20 px-6 sm:px-10 bg-white'>
      <MdMenu
        className='h-12 stroke-slate-600 cursor-pointer sm:hidden'
        //TODO: Add state management for mobile sidebar
        // onClick={() => setMobileNavsidebar(!mobileNavsidebar)}
      />
      <SearchBox />

      <div className='flex flex-shrink-0 items-center ml-auto'>
        <UserMenu />
        <div className='border-l pl-3 ml-3 space-x-1'>
          <LogOutButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
