"use client";
import { X } from "lucide-react";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MessageModel({ closedModel, data, mode }: any) {

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60"
      onClick={() => closedModel(false)}
    >
      {
        mode === "contact" &&
        <div
          className="bg-white p-6 rounded-lg w-[95%] max-w-[600px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{data.studentName}</h2>
            <button
              onClick={() => closedModel(false)}
              className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-herobg/50 text-midnight_text transition-colors hover:bg-herobg hover:text-gray sm:right-6 sm:top-6 sm:h-11 sm:w-11"
            >
              <X />
            </button>
          </div>
          <div className="space-y-4 ">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-full flex gap-6">
                <h3 className="text-lg font-semibold w-32 text-midnight_text">Phone :</h3>
                <p className="text-midnight_text text-opacity-80">{data.phone}</p>
              </div>
              <div className="w-full flex gap-6 ">
                <h3 className="text-lg font-semibold w-32 text-midnight_text">Email :</h3>
                <p className="text-midnight_text text-opacity-80">{data.email}</p>
              </div>
              <div className="w-full flex gap-6 ">
                <h3 className="text-lg font-semibold w-32 text-midnight_text">Date :</h3>
                <p className="text-midnight_text text-opacity-80">{data.date}</p>
              </div>
              <div className="w-full flex  gap-6">
                <h3 className="text-lg font-semibold w-32 text-midnight_text">Message :</h3>
                <p className="w-96 text-justify text-midnight_text text-opacity-80">{data.message}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              className="bg-primary cursor-pointer px-3 py-1 rounded hover:bg-primary/80"
              onClick={() => closedModel(false)}
            >
              Close
            </button>
          </div>
        </div>
      }
      {
        mode === "blog" &&
        <div
          className="bg-white p-6 rounded-lg w-[95%] max-w-[600px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Blog Description</h2>
            <button
              onClick={() => closedModel(false)}
              className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-herobg/50 text-midnight_text transition-colors hover:bg-herobg hover:text-gray sm:right-6 sm:top-6 sm:h-11 sm:w-11"
            >
              <X />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-full flex  gap-3">
                <h3 className="text-lg font-semibold text-midnight_text w-auto">Description :</h3>
                <p className="w-96 text-justify text-midnight_text text-opacity-80">{data}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              className="bg-primary cursor-pointer px-3 py-1 rounded hover:bg-primary/80"
              onClick={() => closedModel(false)}
            >
              Close
            </button>
          </div>
        </div>
      }
      {
        mode === "review" &&
        <div
          className="bg-white p-6 rounded-lg w-[95%] max-w-[600px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{data.fullName}</h2>
            <button
              onClick={() => closedModel(false)}
              className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-herobg/50 text-midnight_text transition-colors hover:bg-herobg hover:text-gray sm:right-6 sm:top-6 sm:h-11 sm:w-11"
            >
              <X />
            </button>
          </div>
          <div className="space-y-4 ">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-full flex gap-6">
                <h3 className="text-lg font-semibold w-24 text-midnight_text">Review :</h3>
                <p className="text-gray w-full">{data.review}</p>
              </div>
              <div className="w-full flex gap-6 ">
                <h3 className="text-lg font-semibold w-24 text-midnight_text">Rating :</h3>
                <p className="text-yellow-500 w-full text-xl">{"★".repeat(data.rating)} </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              className="bg-primary cursor-pointer px-3 py-1 rounded hover:bg-primary/80"
              onClick={() => closedModel(false)}
            >
              Close
            </button>
          </div>
        </div>
      }
      {
        mode === "faq" &&
        <div
          className="bg-white p-6 rounded-lg w-[95%] max-w-[600px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-end mb-4">
            <button
              onClick={() => closedModel(false)}
              className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-herobg/50 text-midnight_text transition-colors hover:bg-herobg hover:text-gray sm:right-6 sm:top-6 sm:h-11 sm:w-11"
            >
              <X />
            </button>
          </div>
          <div className="space-y-4 ">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-full flex gap-6">
                <h3 className="text-lg font-semibold w-28 text-midnight_text">Question :</h3>
                <p className="text-gray w-full">{data.question}</p>
              </div>
              <div className="w-full flex gap-6 ">
                <h3 className="text-lg font-semibold w-28 text-midnight_text">Answer :</h3>
                <p className="w-full text-gray">{data.answer} </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              className="bg-primary cursor-pointer px-3 py-1 rounded hover:bg-primary/80"
              onClick={() => closedModel(false)}
            >
              Close
            </button>
          </div>
        </div>
      }

    </div>
  );
}

