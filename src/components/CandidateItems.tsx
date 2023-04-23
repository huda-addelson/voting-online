import React from 'react';
import Text from './Text';
import Check from '@/assets/Check';

interface Props {
  name?: string;
  no?: number;
  percentage?: number;
  key?: number;
}

export default function CandidateItems({ name, no, percentage, key }: Props) {
  return (
    <div className='flex flex-row px-2 py-1 md:py-5 md:px-5 border border-zinc-100 items-center space-x-2 md:space-x-4 rounded shadow'>
      <div className='bg-zinc-300 w-8 h-6 md:w-12 md:h-10 rounded-md flex items-center justify-center -mt-5 text-sm md:text-lg font-bold'>
        1
      </div>

      <div className='flex flex-col w-full'>
        <Text text='Budi' className='text-lg md:text-2xl font-bold -mb-1' />
        <span className='font-normal text-sm'>Kandidat 1</span>
        <div className='flex flex-rows space-x-2 items-center w-full'>
          {/* Bar */}
          <div className='bg-zinc-100 w-full h-1 rounded-sm'>
            <div className='w-1/2 bg-black h-1 rounded-sm'></div>
          </div>
          {/* Indikator */}
          <span className='text-sm font-normal md:text-base md:font-semibold'>
            45%
          </span>
        </div>
      </div>

      <div className='w-16 h-12 md:w-20 md:h-16 bg-zinc-100 hover:bg-green-500 rounded-md flex items-center justify-center cursor-pointer  transitions group'>
        <Check className='group-hover:text-white w-7 h-7 text-black' />
      </div>
      <div></div>
    </div>
  );
}
