'use client';
import React from 'react';
import Button from './Button';
import Text from './Text';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='container mx-auto flex justify-between py-7 px-3'>
      <Link href={'/'}>
        <Text text='Jujurly' className='text-4xl font-bold' />
      </Link>
      <Button text='Login' type='secondary' />
    </div>
  );
}
