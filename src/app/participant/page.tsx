'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Navbar from '@/components/Navbar';
import Text from '@/components/Text';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Participant() {
  const router = useRouter();
  const [code, setCode] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/participant/${code}`);
  };

  return (
    <div className='mx-auto container h-screen px-2'>
      <Navbar />
      <div className='gap-y-4 px-2 flex flex-col items-center justify-center'>
        <div className='w-[250px] h-[200px] md:w-[350px] md:h-[300px] relative'>
          <Image
            src={'/assets/participant.svg'}
            alt='participant'
            layout='fill'
          />
        </div>
        <Text text='Ikutan Voting' className='text-2xl md:text-3xl font-bold' />
        <p className='w-full md:w-2/5 text-center font-normal md:font-medium'>
          Untuk ikutan voting, kamu harus memasukkan kode voting yang sudah
          diberikan panitia/penyelenggara
        </p>
        <form
          onSubmit={(e) => onSubmit(e)}
          className='w-full md:w-1/4 text-center space-y-2'>
          <Input
            placeholder='Masukkan kode voting'
            type='text'
            onChange={setCode}
            value={code}
            text=''
          />
          <Button text='Lanjutkan' submit='submit' />
        </form>
        <Link href={'/'}>Kembali</Link>
      </div>
    </div>
  );
}
