"use client";
import { X } from "lucide-react";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MessageModel({ closedModel, data, mode }: any) {

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60"
      onClick={() => closedModel(false)}
    >
      {
        mode === "contact" ?

          <div
            className="bg-white p-6 rounded-lg w-[95%] max-w-[600px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{data.studentName}</h2>
              <button
                onClick={() => closedModel(false)}
                className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 sm:right-6 sm:top-6 sm:h-11 sm:w-11"
              >
                <X />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="w-full flex gap-6">
                  <h3 className="font-semibold w-32">Phone :</h3>
                  <p>{data.phone}</p>
                </div>
                <div className="w-full flex gap-6 ">
                  <h3 className="font-semibold w-32">Email :</h3>
                  <p>{data.email}</p>
                </div>
                <div className="w-full flex gap-6 ">
                  <h3 className="font-semibold w-32">Date :</h3>
                  <p>{data.date}</p>
                </div>
                <div className="w-full flex  gap-6">
                  <h3 className="font-semibold w-32">Message :</h3>
                  <p className="w-96 text-justify">{data.message}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                className="bg-gray-300 cursor-pointer px-3 py-1 rounded hover:bg-gray-400"
                onClick={() => closedModel(false)}
              >
                Close
              </button>
            </div>
          </div>
          :


          <div
            className="bg-white p-6 rounded-lg w-[95%] max-w-[600px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Blog Description</h2>
              <button
                onClick={() => closedModel(false)}
                className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 sm:right-6 sm:top-6 sm:h-11 sm:w-11"
              >
                <X />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="w-full flex  gap-6">
                  <h3 className="font-semibold w-32">Description :</h3>
                  <p className="w-96 text-justify">{data}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                className="bg-gray-300 cursor-pointer px-3 py-1 rounded hover:bg-gray-400"
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

