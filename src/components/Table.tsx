import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { LinkIcon } from '@heroicons/react/24/outline';

export default function Table() {
  const sameClass =
    'w-9 h-9 bg-zinc-100 p-2 cursor-pointer hover:bg-zinc-300 transitions';
  const theadClass = 'p-5 text-left';
  const tbodyClass = 'px-5 py-1 text-left whitespace-nowrap';
  return (
    <table className='table-auto w-full border border-zinc-100'>
      <thead>
        <tr className='border border-zinc-100'>
          <th className={theadClass} scope='col'>
            No
          </th>
          <th className={theadClass} scope='col'>
            Judul
          </th>
          <th className={theadClass} scope='col'>
            Kandidat
          </th>
          <th className={theadClass} scope='col'>
            Kode
          </th>
          <th className={theadClass} scope='col'>
            Mulai
          </th>
          <th className={theadClass} scope='col'>
            Selesai
          </th>
          <th className={theadClass} scope='col'>
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={tbodyClass}>1</td>
          <td className={tbodyClass}>Judul Voting</td>
          <td className={tbodyClass}>Huda vs Arsya</td>
          <td className={tbodyClass}>HXH76</td>
          <td className={tbodyClass}>20 oct 2022 11:00 AM</td>
          <td className={tbodyClass}>22 oct 2022 11:00 AM</td>
          <td className='px-5 py-1 flex gap-2'>
            <LinkIcon className={sameClass} />
            <TrashIcon className={sameClass} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
