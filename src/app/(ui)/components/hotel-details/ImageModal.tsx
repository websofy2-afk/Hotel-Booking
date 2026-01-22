"use client";
import Image from "next/image";

export default function ImageModal({
  image,
  onClose,
}: {
  image: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white"
      >
        {/* <X size={30} /> */}
        X
      </button>
      <Image
        src={image}
        alt="Preview"
        width={1200}
        height={800}
        className="max-h-[90vh] w-auto rounded-lg"
      />
    </div>
  );
}
