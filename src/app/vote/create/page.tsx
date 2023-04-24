'use client';
import Input from '@/components/Input';
import Text from '@/components/Text';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import id from 'date-fns/locale/id';
import 'react-datepicker/dist/react-datepicker.css';
import CandidateForm from '@/components/CandidateForm';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import { PlusIcon } from '@heroicons/react/24/outline';

registerLocale('id', id);

export default function CreateVote() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  // Push kandidat ke array
  const submitCandidate = (candidate: Candidate) => {
    setCandidates(
      candidates.map((c) => (c.key === candidate.key ? candidate : c))
    );
  };

  // Hapus Kandidat berdasarkan id
  const removeCandidate = (key: number) => {
    const newCandidate = candidates.filter(
      (candidate) => candidate.key !== key
    );

    newCandidate.forEach((candidate, index) => {
      candidate.key = index + 1;
    });

    setCandidates(newCandidate);
  };

  // Menambahkan kotak kandidat
  const addCandidates = () => {
    const newCandidate = {
      name: '',
      key: candidates.length + 1,
      title: '',
    };
    setCandidates([...candidates, newCandidate]);
  };

  useEffect(() => {
    setEndDate(startDate);
  }, [startDate]);

  return (
    <div className='container mx-auto px-2'>
      <Navbar />
      <div className=' px-5 py-12'>
        {/* Header Voting Baru */}
        <div className='flex flex-col gap-y-2 py-5'>
          <Image
            src={'/assets/new-vote.svg'}
            width={250}
            height={250}
            alt='new vote'
            className='flex items-center justify-center'
          />
          <Text
            text='Buat Voting Baru'
            className='text-xl md:text-3xl font-extrabold'
          />
          <p className='font-medium'>Silahkan masukkan data yang dibutuhkan</p>
        </div>
        {/* Detail Voting */}
        <form className='py-5 w-full md:w-3/5 space-y-3'>
          <Text
            text='Detail Voting'
            className='text-xl md:text-2xl font-medium'
          />
          <Input
            placeholder='Contoh : Voting Calon Gubernur'
            text='Judul'
            onChange={(e) => {}}
          />
          <div className=' md:flex space-y-3 md:space-y-0 md:space-x-3'>
            <div className='w-full space-y-1'>
              <Text text='Kapan Mulai?' className='text-base font-medium' />
              <ReactDatePicker
                locale={'id'}
                showTimeSelect
                selected={startDate}
                onChange={(date) => date && setStartDate(date)}
                dateFormat={'Pp'}
                minDate={new Date()}
                className='w-full bg-zinc-100 p-1 px-3'
              />
            </div>
            <div className='w-full space-y-1'>
              <Text text='Sampai' className='text-base font-medium' />
              <ReactDatePicker
                locale={'id'}
                showTimeSelect
                selected={endDate}
                onChange={(date) => date && setEndDate(date)}
                dateFormat={'Pp'}
                minDate={startDate}
                className='w-full bg-zinc-100 p-1 px-3'
              />
            </div>
          </div>
        </form>
        {/* Kandidat */}
        <div className='mt-5 md:mt-10 space-y-2'>
          <Text text='Kandidat' className='text-xl md:text-2xl font-medium' />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {candidates.map((candidate, index) => (
              <CandidateForm
                key={index}
                submitCandidate={submitCandidate}
                candidates={candidate}
                removeCandidate={removeCandidate}
              />
            ))}
            <div
              className={`w-1/3 bg-zinc-100 aspect-square flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-700 hover:text-white transition-colors ${
                candidates.length < 1 ? 'self-center' : 'place-self-center'
              }`}
              onClick={() => addCandidates()}>
              <PlusIcon className='w-2/3 text-zinc-400' />
            </div>
          </div>
        </div>
        <div className='mt-6 text-end'>
          <Button text='Buat Voting' />
        </div>
      </div>
    </div>
  );
}
