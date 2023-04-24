import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { createRoot } from 'react-dom/client';

interface Props {
  open: boolean;
  title?: string;
  message?: string;
  closeBtnText?: string;
  positiveBtnText?: string;
  onCloseClick?: () => void;
  onPositiveClick?: () => void;
}

const Modal = ({
  open,
  title,
  message,
  closeBtnText,
  positiveBtnText,
  onCloseClick,
  onPositiveClick,
}: Props) => {
  const [isOpen, setIsOpen] = useState(open);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={`relative z-10 ${!isOpen && 'hidden'}`}
      role='dialog'
      arial-aria-modal='true'>
      {/* background  */}
      <div className='fixed inset-0 bg-zinc-900 bg-opacity-40 transition-opacity'></div>

      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center text-center'>
          <div
            className='relative transform overflow-hidden bg-white shadow-xl transition-all p-4 rounded-md'
            ref={modalRef}>
            {/* Content */}
            <div className='w-full p-2 md:p-5 text-center flex flex-col gap-y-3'>
              <p className='text-xl md:text-2xl font-bold'>
                {title || 'Title'}
              </p>
              <span className='text-sm md:text-base font-medium'>
                {message || 'Message Here'}
              </span>

              {/* Button */}
              <div className='space-x-3 mt-5'>
                <button
                  className=' bg-zinc-100 px-4 py-2 hover:bg-zinc-300 transitions text-sm md:text-lg font-medium md:font-bold'
                  onClick={() => {
                    onCloseClick && onCloseClick();
                    setIsOpen(false);
                  }}>
                  {closeBtnText || 'Kembali'}
                </button>
                <Button
                  text={positiveBtnText || 'Ya'}
                  className={`${!onPositiveClick && 'hidden'}`}
                  onClick={() => {
                    onPositiveClick && onPositiveClick();
                    setIsOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ShowModal({
  open,
  title,
  message,
  closeBtnText,
  positiveBtnText,
  onCloseClick,
  onPositiveClick,
}: Props) {
  const modal = document.createElement('div');
  modal.id = 'modal';
  document.body.appendChild(modal);
  const root = createRoot(modal);
  root.render(
    <Modal
      open={open}
      title={title}
      message={message}
      closeBtnText={closeBtnText}
      positiveBtnText={positiveBtnText}
      onCloseClick={onCloseClick}
      onPositiveClick={onPositiveClick}
    />
  );
}
