import React from 'react';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='text-center bg-slate-500 h-auto w-[100%] px-4 md:px-16 text-yellow-50 bottom-0 z-10'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center h-20 w-20'>
          <BsFacebook className='h-10 w-10' />
          <AiFillTwitterCircle className='h-10 w-10' />
          <BsWhatsapp className='h-10 w-10' />
          <AiFillLinkedin className='h-10 w-10' />
        </div>

        <div className='flex items-center'>
          <span className=' mr-4'>&copy;{new Date().getFullYear()}</span>
          <a
            href='https://www.linkedin.com/in/chayuga'
            rel='noreferrer'
            target='_blank'
          >
            Rodgers Chayuga
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
