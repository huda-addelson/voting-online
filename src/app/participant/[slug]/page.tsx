'use client';
import Button from '@/components/Button';
import CandidateItems from '@/components/CandidateItems';
import CountDownVote from '@/components/CountDown/CountDownVote';
import Navbar from '@/components/Navbar';
import Text from '@/components/Text';
import React from 'react';

interface Props {
  params: { slug: string };
}

export default function DetailParticipant({ params }: Props) {
  const title = params.slug;

  return (
    <div className='container mx-auto px-2'>
      <Navbar />
      <div className='flex w-full flex-col items-center justify-center gap-y-3 md:gap-y-7'>
        <Text text='Judul Voting' className='text-2xl font-extrabold' />
        {/* <Timer> */}
        <CountDownVote />
        {/* <Timer/> */}

        {/* <Kandidat>*/}
        <div className='w-full md:w-4/5 lg:w-2/3 mt-5 md:mt-8 space-y-3 flex flex-col mx-auto'>
          <CandidateItems />
          <CandidateItems />
          <CandidateItems />
        </div>
        {/* <Kandidat/> */}

        {/* Submit */}
        <Button text='Kirim vote saya' className='rounded-md' />
      </div>
    </div>
  );
}
