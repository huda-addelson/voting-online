import React from 'react';

interface Props {
  text: string;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  submit?: 'submit';
  className?: string;
}

export default function Button({
  text,
  type,
  onClick,
  submit,
  className,
}: Props) {
  return (
    <button
      className={`p-4 py-2 transitions text-sm md:text-lg font-medium md:font-bold ${className} ${
        type === 'secondary'
          ? 'bg-white border-2 border-black text-black hover:bg-black hover:text-white'
          : 'bg-black text-white border border-black hover:bg-zinc-700 hover:border-zinc-700'
      }`}
      onClick={onClick}
      type={submit ?? undefined}>
      {text}
    </button>
  );
}
