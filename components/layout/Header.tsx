import React, { useContext } from 'react';

import useMediaQuery from '../../hooks/useMediaQuery';

import LogOutButton from './header/LogOutButton';
import SearchBox from './header/SearchBox';
import UserMenu from './header/UserMenu';

import { useSidebarContext } from '../../context/SidebarContext';

const Header = () => {
  const { mobileNavsidebar, setMobileNavsidebar } = useSidebarContext();
  const isTabletAndAbove = useMediaQuery('(min-width: 680px)');

  return (
    <header className='px-6 sm:pl-20 bg-white'>
      <div className='flex items-center justify-between ml-auto'>
        <>{isTabletAndAbove && <SearchBox />}</>
        <div className='flex items-center'>
          <UserMenu />
          <div className='border-l pl-3 ml-3 space-x-1'>
            <LogOutButton />
          </div>
        </div>
      </div>
      {!isTabletAndAbove ? <SearchBox /> : ''}
    </header>
  );
};

export default Header;
