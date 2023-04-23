import React from 'react';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import CountDownItem from './CountDownItem';

export default function CountDownVote() {
  const CountDownRender: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
  }) => {
    return (
      <CountDownItem
        days={days}
        hours={hours}
        minutes={minutes}
        second={seconds}
      />
    );
  };
  return (
    <div className='flex flex-col items-center gap-y-1'>
      <span className='font-medium text-zinc-600'>
        Voting sedang berlangsung :{' '}
      </span>
      <Countdown date={Date.now() + 10000000} renderer={CountDownRender} />
    </div>
  );
}
