import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import React, { useEffect, useRef, useState } from 'react';
import OutsideClick from '../../../utils/outsideClick';

const UserMenu = () => {
  const [userMenuStatus, setUserMenuStatus] = useState(false);
  const buttonRef = useRef(null);
  const buttonOutsideClick = OutsideClick(buttonRef);

  const userMenuhandle = () => {
    setUserMenuStatus(!userMenuStatus);
  };

  useEffect(() => {
    if (buttonOutsideClick) {
      setUserMenuStatus(false);
    }
  }, [buttonOutsideClick]);

  //console.log("userbutton", buttonOutsideClick)
  return (
    <button
      className='inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg relative'
      onClick={userMenuhandle}
      ref={buttonRef}
    >
      <span className='sr-only'>User Menu</span>
      <div className='hidden md:flex md:flex-col md:items-end md:leading-tight'>
        <span className='font-semibold'>Grace Simmons</span>
        {/* TODO: display correct name from login */}
      </div>
      <span className='h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden'>
        <img
          // TODO: display the correct image src={session?.user?.image}
          alt='user profile photo'
          className='h-full w-full object-cover'
        />
      </span>

      {userMenuStatus && (
        <div className='absolute right-0 sm:-bottom-16 bg-slate-500 px-2 py-1 space-x-2 text-yellow-50 w-full -bottom-28'>
          <a className='block hover:bg-gray-50 hover:text-black'>
            user Profile
          </a>
          <a className='block hover:bg-gray-50 hover:text-black'>
            user setting
          </a>
        </div>
      )}

      {userMenuStatus ? (
        <BsChevronDown className='hidden sm:block h-6 w-6 text-gray-300' />
      ) : (
        <BsChevronUp className='hidden sm:block h-6 w-6 text-gray-300' />
      )}
    </button>
  );
};

export default UserMenu;
