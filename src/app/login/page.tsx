import Text from '@/components/Text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-y-5 px-2'>
      <Link href={'/'}>
        <Text text='Jujurly' className='text-3xl md:text-5xl font-semibold' />
      </Link>
      <div className=' md:w-1/5'>
        <button className='w-full px-4 py-2 border-2 border-black flex items-center gap-x-2 hover:bg-black hover:text-white justify-center transitions'>
          <Image
            src={'/assets/google.svg'}
            width={20}
            height={20}
            alt='google icons'
          />
          Login Dengan Google
        </button>
      </div>
      <Link
        href={'/'}
        className='px-4 py-2 flex items-center gap-x-2 bg-zinc-100 hover:bg-zinc-300 transitions'>
        <HomeIcon className='w-5 h-5' /> Back to home
      </Link>
    </div>
  );
}
