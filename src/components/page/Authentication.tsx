import Image from 'next/image';
import React from 'react';
import Text from '../Text';
import Button from '../Button';

export default function Authentication() {
  return (
    <div className='container px-2 text-center mx-auto flex flex-col items-center justify-center min-h-screen gap-y-2 md:gap-y-5'>
      <Image
        src={'/assets/authentication.svg'}
        alt='authentication'
        width={300}
        height={300}
      />
      <Text text='Login dulu yah !' className='text-3xl font-bold' />
      <p className='text-base'>
        Untuk mengakses halaman ini, kamu wajib login terlebih dahulu
      </p>
      <Button text='Login' />
    </div>
  );
}
