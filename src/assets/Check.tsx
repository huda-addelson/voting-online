import React from 'react';
interface Props {
  color?: string;
  className?: string;
}

export default function Check({ className, color }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke={color ?? 'currentColor'}
      className={className ?? 'w-6 h-6'}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 12.75l6 6 9-13.5'
      />
    </svg>
  );
}
