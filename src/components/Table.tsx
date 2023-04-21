import Link from '@/assets/Link';
import Trash from '@/assets/Trash';
import React from 'react';

export default function Table() {
  const sameClass =
    'w-9 h-9 bg-zinc-100 p-2 cursor-pointer hover:bg-zinc-300 transitions';
  return (
    <table className='table-auto w-full border border-zinc-100'>
      <thead>
        <tr className='border border-zinc-100'>
          <th className='p-5 text-left' scope='col'>
            No
          </th>
          <th className='p-5 text-left' scope='col'>
            Judul
          </th>
          <th className='p-5 text-left' scope='col'>
            Kandidat
          </th>
          <th className='p-5 text-left' scope='col'>
            Kode
          </th>
          <th className='p-5 text-left' scope='col'>
            Mulai
          </th>
          <th className='p-5 text-left' scope='col'>
            Selesai
          </th>
          <th className='p-5 text-left' scope='col'>
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='px-5 py-1 text-left whitespace-nowrap'>1</td>
          <td className='px-5 py-1 text-left whitespace-nowrap'>
            Judul Voting
          </td>
          <td className='px-5 py-1 text-left whitespace-nowrap'>
            Huda vs Arsya
          </td>
          <td className='px-5 py-1 text-left whitespace-nowrap'>HXH76</td>
          <td className='px-5 py-1 text-left whitespace-nowrap'>
            20 oct 2022 11:00 AM
          </td>
          <td className='px-5 py-1 text-left whitespace-nowrap'>
            22 oct 2022 11:00 AM
          </td>
          <td className='px-5 py-1 flex gap-2'>
            <Link className={sameClass} />
            <Trash className={sameClass} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
