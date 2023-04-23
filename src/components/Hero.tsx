'use client';
import Image from 'next/image';
import React from 'react';
import Text from './Text';
import Button from './Button';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  return (
    <div className='flex flex-col place-items-center py-20 space-y-5 w-full'>
      <Text
        text='Ayo Mulai Voting'
        className='text-3xl md:text-5xl font-bold'
      />
      <Text
        text='Web Voting Nomer 1 di Indonesia'
        className='bg-zinc-100 px-2 py-1 text-xs md:text-base'
      />
      <Image width={400} height={400} alt='herovote' src={'/assets/vote.svg'} />
      <div className='flex gap-20'>
        <Button
          text='Buat Vote Baru'
          onClick={() => router.push('/vote/create')}
        />
        <Button
          text='Ikutan Vote'
          type='secondary'
          onClick={() => router.push('/participant')}
        />
      </div>
    </div>
  );
}
