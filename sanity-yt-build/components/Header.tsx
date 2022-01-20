import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div className='bg-[#C4e2FF]'>
      <div className='border-b-2 border-black'>
        <header className='flex items-center justify-between p-5 bg-[#C4E2FF] max-w-7xl mx-auto'>
          <div className='flex items-center space-x-5'>
            <Link href='/'>
              <img
                className='w-44 object-contain cursor-pointer'
                src='https://links.papareact.com/yvf'
                alt='logo'
              />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5'>
              <h3>About</h3>
              <h3>Contact</h3>
              <h3 className='text-white bg-green-600 rounded-full px-4 py-1'>
                Follow
              </h3>
            </div>
          </div>
          <div className='flex items-center space-x-5 text-green-600'>
            <h3>Sign In</h3>
            <h3 className='border px-4 py-1 rounded-full border-green-600'>
              Get Started
            </h3>
          </div>
        </header>
      </div>
      <div className='flex items-center justify-between py-[64px] max-w-7xl mx-auto p-5'>
        <div className='px-10 space-y-5 '>
          <h1 className='text-6xl max-w-xl font-serif leading-[80px]'>
            Medium is a place to write, read, and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <p className='text-9xl font-serif hidden md:inline-flex'>M</p>
      </div>
    </div>
  );
}

export default Header;
