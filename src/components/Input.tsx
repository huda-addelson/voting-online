import React from 'react';
import Text from './Text';

interface Props {
  text: string;
  value?: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
  placeholder: string;
}

export default function Input({
  text,
  type,
  value,
  onChange,
  className,
  placeholder,
}: Props) {
  return (
    <div className='w-full space-y-1'>
      <Text className='text-base font-medium' text={text} />
      <input
        type={type ?? 'text'}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className={`bg-zinc-100 px-4 py-2 w-full outline-none ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}
