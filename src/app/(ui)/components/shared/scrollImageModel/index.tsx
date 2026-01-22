'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

export default function ScrollImageModal({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);

  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <button onClick={onClose} className="absolute flex items-center justify-center rounded-full bg-white/50 w-8 h-8 top-6 right-6 text-midnight_text">
        <RxCross2 size={20} />
      </button>
      <button onClick={e=>e.stopPropagation()}  className="absolute left-6 text-white">
        <BiChevronLeft onClick={prev}   className='flex  items-center justify-center rounded-full bg-white/50 w-8 h-8'/>
      </button>
      <Image
        src={images[index]}
        alt="Room"
        width={1000}
        height={600}
        className="rounded-xl object-cover max-h-[80vh]"
      />
      <button onClick={e=>e.stopPropagation()}  className="absolute right-6 text-white">
        <BiChevronRight onClick={next} className='flex  items-center justify-center rounded-full bg-white/50 w-8 h-8' />
      </button>
    </div>
  );
}
