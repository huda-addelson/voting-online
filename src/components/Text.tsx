import React from 'react';

interface Props {
  text: string;
  className: string;
}

export default function Text({ text, className }: Props) {
  return <div className={`${className}`}>{text}</div>;
}
