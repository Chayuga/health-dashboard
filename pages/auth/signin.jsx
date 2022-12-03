import { useSession, getProviders, signIn, signOut } from 'next-auth/react';

import { FcGoogle } from 'react-icons/fc';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

import useMediaQuery from '../../hooks/useMediaQuery';

export default function SignIn({ providers }) {
  const { data: session } = useSession();

  const isTabletAndAbove = useMediaQuery('(min-width: 680px)');

  if (session) {
    return (
      <>
        <p>Hello, {session.user.name}</p>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => signOut()}
              className='relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full'
            >
              Sign Out
            </button>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <div className='flex min-h-screen flex-col items-center justify-center py-2 bg-gray-200'>
            <main className='flex w-full flex-1 flex-col items-center justify-center md:px-10 lg:px-20  text-center'>
              <div className='bg-white rounded-2xl shadow-2xl flex md:flex-col-reverse lg:flex-row w-[90%] md:w-[80%] lg:w-[70%]'>
                <div className='w-[100%]'>
                  <div className='py-10'>
                    <h2 className='text-3xl font-bold mb-2 text-green-400'>
                      Sign in to Account
                    </h2>
                    <div className='border-2 w-16 border-green-400 inline-block mb-2' />
                    <div className='flex justify-center'>
                      <button
                        onClick={() => signIn('google', { callbackUrl: '/' })}
                        className='flex justify-center text-blue-600 bg-white my-2 py-2 rounded-md border-2 border-gray hover:border-blue-600 hover:font-bold hover:shadow-md'
                      >
                        <div className='mx-1'>
                          <FcGoogle size={24} />
                        </div>
                        <p className='pr-4'>Sign in with {provider.name}</p>
                      </button>
                    </div>
                    <p className='text-gray-400 my-3'>
                      or use your email account
                    </p>
                    <form className='flex flex-col items-center'>
                      <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <div className='text-gray-400 m-2'>
                          <FaRegEnvelope />
                        </div>
                        <input
                          type='email'
                          name='email'
                          placeholder='Email'
                          className='flex-grow bg-gray-100 text-gray-500 outline-none text-sm'
                        />
                      </div>
                      <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <div className='text-gray-400 m-2'>
                          <MdLockOutline />
                        </div>
                        <input
                          type='password'
                          name='password'
                          placeholder='Password'
                          className='flex-grow bg-gray-100 text-gray-500 outline-none text-sm'
                        />
                      </div>
                      <div className='flex justify-between items-center w-64 mb-5'>
                        <label className='flex items-center text-sm '>
                          <input
                            type='checkbox'
                            name='remember'
                            className='mr-1'
                          />
                          Remember me
                        </label>
                        <a className='text-xs'>Forgot password?</a>
                      </div>
                      <button className='border-2 border-green-400 rounded-full px-12 py-2 inline-block font-semibold text-green-400 hover:bg-green-400 hover:text-white'>
                        Sign In
                      </button>
                    </form>
                  </div>
                </div>
                {isTabletAndAbove && (
                  <div className='w-[100%] md:w-[100%] bg-green-400 text-white  md:rounded-none lg:rounded-tr-2xl lg:rounded-br-2xl py-6 lg:py-32 px-12'>
                    <div className=''>
                      <h2 className='text-3xl font-bold mb-2'>
                        Hello, Friend!
                      </h2>
                      <div className='border-2 w-16 border-white inline-block mb-2' />
                      <p className='mb-10'>
                        Please sign in using your google account and start
                        journey with us.
                      </p>
                      <button className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-400'>
                        Sign Up
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
