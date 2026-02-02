"use client";
import { useState, useRef } from "react";
import { X } from "lucide-react";
import Label from "../form/Label";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogCategoryModel({ mode, onClose, onSave, initialData }: any) {
  const [form, setForm] = useState(initialData || {category: ""});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.category) {
      alert("Please fill the category!");
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60" onClick={onClose}>
      <div
        className="bg-white p-6 rounded-lg w-[95%] max-w-[500px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">

          <h2 className="text-xl font-semibold">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Create"} Category</h2>
          <button
            onClick={onClose}
            className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-herobg/50 text-midnight_text transition-colors hover:bg-herobg hover:text-gray sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            <X />
          </button>
        </div>

        {mode === "delete" ? (
          <p>Are you sure want to delete this category?</p>
        ) : (
          <>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Blog Category</Label>
                  <input
                    name="category"
                    placeholder="Category"
                    className="border w-full p-2 rounded border-border shadow-md shadow-skyBlue/20 outline-none"
                    value={form.category}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <div className="flex justify-end gap-3 mt-6">
          <button
            className="bg-gray/30 cursor-pointer px-3 py-1 rounded hover:bg-gray/20"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`${mode === "delete" ? "bg-red-600" : "bg-primary"
              } text-white px-3 py-1 cursor-pointer rounded hover:opacity-90`}
            onClick={handleSubmit}
          >
            {mode === "delete" ? "Delete" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

