"use client";
import ImageUploader from "../common/ImageUploader";
import { useState, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import { X } from "lucide-react";
import Label from "../form/Label";
import Tooltip from "../common/Tooltip";
const JoditEditor = dynamic(
  () => import("jodit-react"),
  { ssr: false }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogModel({ mode, onClose, onSave, initialData, blogCategorydata }: any) {
  const editor = useRef(null);
  const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
    null
  );
  const [form, setForm] = useState(
    initialData || {
      title: "",
      subTitle: "",
      category: "",
      content: "",
      image: "",
      date: "",
      hashtag: "",
      image_public_Id: "",
      slug: "",
      schemaMarkup: "",
      metaTitle: "",
      metaDescription: "",
      metakeywords: "",
    }
  );

  const showTooltip = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (
      !form.title ||
      !form.subTitle ||
      !form.category ||
      !form.content ||
      !form.image ||
      !form.date ||
      !form.hashtag ||
      !form.metaTitle ||
      !form.metaDescription ||
      !form.metakeywords ||
      !form.slug ||
      !form.image_public_Id
    ) {
      showTooltip("Please fill all fields!", "error");
      return;
    }
    onSave(form);
  };

  const placeholder = 'Write your blog here...'
  const config = useMemo(() => ({
    readonly: false,
    placeholder: placeholder || 'Write your blog here...'
  }),
    [placeholder]
  );

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60">
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <div
        className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[550px]" : "max-w-[1150px]"}  max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar` } onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Add"} Blog</h2>
          <button
            onClick={onClose}
            className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-herobg/50 text-midnight_text transition-colors hover:bg-herobg hover:text-gray sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            <X />
          </button>
        </div>

        {mode === "delete" ? (
          <p>Are you sure want to delete this blog?</p>
        ) : (
          <>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Title</Label>
                  <input
                    name="title"
                    placeholder="Title"
                    className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
                    value={form.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <Label>Subtitle</Label>
                  <input
                    name="subTitle"
                    placeholder="Subtitle"
                    className="border w-full p-2 rounded border-border shadow-md shadow-skyBlue/20 outline-none"
                    value={form.subTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Category</Label>
                  <select
                    name="category"
                    className="border w-full p-2 rounded cursor-pointer border-border shadow-md shadow-skyBlue/20 outline-none"
                    value={form.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    {
                      blogCategorydata.map((item: any, index: number) => (
                        <option key={index} value={item.category}>{item.category}</option>
                      ))
                    }
                  </select>
                </div>

                <div className="w-full">
                  <Label>Hashtag</Label>
                  <input
                    name="hashtag"
                    placeholder="Hashtag Seprated By Comma"
                    className="border w-full p-2 rounded border-border shadow-md shadow-skyBlue/20 outline-none"
                    value={form.hashtag}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Date</Label>
                  <input
                    type="date"
                    name="date"
                    className="border w-full p-2 rounded border-border shadow-md shadow-skyBlue/20 outline-none"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <Label>Slug</Label>
                  <input
                    name="slug"
                    placeholder="Slug"
                    className="border w-full p-2 rounded border-border shadow-md shadow-skyBlue/20 outline-none"
                    value={form.slug}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Meta Title</Label>
                  <input
                    name="metaTitle"
                    placeholder="Meta Title"
                    className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
                    value={form.metaTitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <Label>Meta Description</Label>
                  <input
                    name="metaDescription"
                    placeholder="Meta Description"
                    className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
                    value={form.metaDescription}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full">
                <Label>Meta Keywords</Label>
                <textarea
                  name="metakeywords"
                  value={form.metakeywords}
                  placeholder="Meta Keywords Seprated By Comma..."
                  rows={5}
                  onChange={handleChange}
                  className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full resize-none p-2 rounded"
                />
              </div>

              <div className="w-full">
                <Label>Blog Schema Markup</Label>
                <textarea
                  name="schemaMarkup"
                  value={form.schemaMarkup}
                  placeholder="Write your schema markup..."
                  rows={15}
                  onChange={handleChange}
                  className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full resize-none p-2 rounded"
                />
              </div>

              <div>
                <Label>Write Your Blog...</Label>
                <JoditEditor
                  name="content"
                  ref={editor}
                  value={form.content}
                  config={config}
                  tabIndex={1}
                  onChange={newContent => setForm({ ...form, content: newContent })}
                  className="border border-border shadow-md shadow-skyBlue/20 outline-none"
                />
              </div>
              <Label>Blog Image</Label>
              <ImageUploader
                label="Blog Image"
                folder="blog"
                onUpload={(url, public_Id) => setForm({ ...form, image: url || "", image_public_Id: public_Id || null })}
                defaultPreview={form.image}
              />
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



