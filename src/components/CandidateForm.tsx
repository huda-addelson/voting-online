import React, { useEffect, useState } from 'react';
import Input from './Input';
import { XCircleIcon } from '@heroicons/react/24/outline';

interface Props {
  candidates: Candidate;
  submitCandidate: (candidate: Candidate) => void;
  removeCandidate: (key: number) => void;
}

export default function CandidateForm({
  candidates,
  submitCandidate,
  removeCandidate,
}: Props) {
  const [candidate, setCandidate] = useState<Candidate>({
    name: '',
    key: 0,
    title: '',
  });

  useEffect(() => {
    setCandidate(candidates);
  }, [candidates]);

  useEffect(() => {
    submitCandidate(candidate);
  }, [candidate]);

  return (
    <div className='flex flex-col border border-zinc-100 w-full p-4 sm:p-5 md:p-7 space-y-2 md:space-y-4'>
      <div
        className='self-end cursor-pointer hover:text-zinc-500'
        onClick={() => removeCandidate(candidate.key)}>
        <XCircleIcon className='w-6 h-6' />
      </div>
      <div className='self-center w-20 h-20 bg-zinc-200 rounded-full flex items-center justify-center font-bold text-2xl'>
        {candidates.key}
      </div>
      <Input
        text='Nama Kandidat'
        placeholder='Masukkan nama kandidat'
        value={candidate.name}
        onChange={(e) => setCandidate({ ...candidate, name: e })}
      />
    </div>
  );
}
