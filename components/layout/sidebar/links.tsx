import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaRegComments } from 'react-icons/fa';
import { BiMessageSquareDots } from 'react-icons/bi';

export const links = [
  {
    title1: 'Main pages',
    title2: 'Pages',
    links: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        iconActive: (
          <MdOutlineSpaceDashboard className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
        iconNormal: (
          <MdOutlineSpaceDashboard className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
      },
      {
        name: 'Profile',
        iconActive: (
          <CgProfile className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
        iconNormal: (
          <CgProfile className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
      },
      {
        name: 'Comments',
        iconActive: (
          <FaRegComments className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
        iconNormal: (
          <FaRegComments className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
      },
      {
        name: 'Analytics',
        iconActive: (
          <MdOutlineAnalytics className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
        iconNormal: (
          <MdOutlineAnalytics className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
      },
      {
        name: 'Messages',
        iconActive: (
          <BiMessageSquareDots className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
        iconNormal: (
          <BiMessageSquareDots className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
      },
      {
        name: 'Integration',
        iconActive: (
          <MdOutlineIntegrationInstructions className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
        iconNormal: (
          <MdOutlineIntegrationInstructions className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
      },
    ],
  },

  {
    title1: 'Advanced',
    title2: 'Advanced',
    links: [
      {
        name: 'Settings',
        iconActive: (
          <MdOutlineSettings className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
        iconNormal: (
          <MdOutlineSettings className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
      },
      {
        name: 'More',
        iconActive: (
          <MdOutlineMoreHoriz className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
        iconNormal: (
          <MdOutlineMoreHoriz className='text-2xl text-gray-600 group-hover:text-white ' />
        ),
      },
    ],
  },
];
