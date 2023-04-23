import React from 'react';
import { zeroPad } from 'react-countdown';

interface Props {
  days: number;
  hours: number;
  minutes: number;
  second: number;
}

export default function CountDownItem({ days, hours, minutes, second }: Props) {
  const Item = ({ label, value }: { label: string; value: number }) => {
    return (
      <>
        <div className='flex flex-col items-center'>
          <span className='text-3xl  md:text-5xl font-semibold md:font-bold'>
            {zeroPad(value, 2)}
          </span>
          <p className='text-sm md:text-base font-medium'>{label}</p>
        </div>
        {label !== 'Detik' && <div className='-mt-5'>:</div>}
      </>
    );
  };

  return (
    <div className='flex space-x-3 items-center'>
      <Item label='Hari' value={days} />
      <Item label='Jam' value={hours} />
      <Item label='Menit' value={minutes} />
      <Item label='Detik' value={second} />
    </div>
  );
}
