"use client";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

export default function ImageModal({
  image,
  onClose,
}: {
  image: string;
  onClose: () => void;
}) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 flex items-center justify-center right-6 rounded-full bg-white/50 w-8 h-8"
      >
        <RxCross2 size={20} />
      </button>
      <Image
        src={image}
        alt="Preview"
        width={1200}
        height={800}
        className="h-92 w-[60vw] rounded-lg"
      />
    </div>
  );
}
