import React from 'react';

import { patients } from './patients';
import dynamic from 'next/dynamic';

const BarGraph = dynamic(() => import('../graph/BarGraph'), { ssr: false });

const DonutChart = dynamic(() => import('../graph/DonutChart'), { ssr: false });

const Dashboard = () => {
  return (
    <main className='p-6 sm:p-10 space-y-6 w-[100%]'>
      <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between'>
        <div className='mr-6'>
          <h1 className='text-4xl font-semibold mb-2'>Dashboard</h1>
          <h2 className='text-gray-600 ml-0.5'>Health Monitor Dashboard</h2>
        </div>
        <div className='flex flex-wrap items-start justify-end -mb-3'>
          <button className='inline-flex px-5 py-3 text-green-600 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100 border border-green-600 rounded-md mb-3'>
            <svg
              aria-hidden='true'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
              />
            </svg>
            Manage record
          </button>
          <button className='inline-flex px-5 py-3 text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3'>
            <svg
              aria-hidden='true'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
            Create new record
          </button>
        </div>
      </div>
      <section className='grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
        <div className='flex items-center p-8 bg-white shadow rounded-lg'>
          <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6'>
            <svg
              aria-hidden='true'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          </div>
          <div>
            <span className='block text-2xl font-bold'>62</span>
            <span className='block text-gray-500'>Patients</span>
          </div>
        </div>
        <div className='flex items-center p-8 bg-white shadow rounded-lg'>
          <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6'>
            <svg
              aria-hidden='true'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
              />
            </svg>
          </div>
          <div>
            <span className='block text-2xl font-bold'>6.8</span>
            <span className='block text-gray-500'>Response rate</span>
          </div>
        </div>
        <div className='flex items-center p-8 bg-white shadow rounded-lg'>
          <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6'>
            <svg
              aria-hidden='true'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 17h8m0 0V9m0 8l-8-8-4 4-6-6'
              />
            </svg>
          </div>
          <div>
            <span className='inline-block text-2xl font-bold'>9</span>
            <span className='inline-block text-xl text-gray-500 font-semibold'>
              (14%)
            </span>
            <span className='block text-gray-500'>Deteriorating patients</span>
          </div>
        </div>
        <div className='flex items-center p-8 bg-white shadow rounded-lg'>
          <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6'>
            <svg
              aria-hidden='true'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
              />
            </svg>
          </div>
          <div>
            <span className='block text-2xl font-bold'>83%</span>
            <span className='block text-gray-500'>Stabilized Patients</span>
          </div>
        </div>
      </section>
      <section className='grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6'>
        <div className='flex flex-col w-[100%] md:col-span-2 md:row-span-2 bg-white shadow rounded-lg'>
          <div className='px-6 py-5 font-semibold border-b border-gray-100'>
            The heartbeat rate and miles covered
          </div>
          <div className='p-4 flex-grow'>
            <div className='flex items-center justify-center h-full md:px-4 md:py-16  bg-gray-100 border-2 border-gray-200 border-dashed rounded-md'>
              <BarGraph />
            </div>
          </div>
        </div>

        <div className='row-span-2 bg-white shadow rounded-lg'>
          <div className='flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100'>
            <span>Patients by heartbeat rate</span>
          </div>
          <div className='overflow-y-auto' style={{ maxHeight: '24rem' }}>
            <ul className='p-6 space-y-6'>
              {patients.map((patient) => (
                <li key={patient.name} className='flex items-center'>
                  <span className='text-gray-600'>{patient.name} </span>
                  <span className='ml-auto font-semibold'>{patient.rate} </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col row-span-2 bg-white shadow rounded-lg'>
          <div className='px-6 py-5 font-semibold border-b border-gray-100'>
            Patients by type of admission
          </div>
          <div className='p-4 flex-grow'>
            <div className='flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md'>
              <DonutChart />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
