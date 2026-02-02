"use client";
import { getEmbedUrl } from "@/lib/getEmbedUrl";
import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { LiaCheckCircle } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

export default function VideoModal({
  mode,
  onClose,
  onSave,
  initialData,
  loading,
}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  : any) {
  const [form, setForm] = useState(
    initialData || { title: "", subtitle: "", video: "" }
  );

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<"youtube" | "video" | null>(
    null
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "video") {
      const ytEmbed = getEmbedUrl(value);
      if (ytEmbed) {
        setPreviewUrl(ytEmbed);
        setPreviewType("youtube");
      } else if (value.endsWith(".mp4") || value.includes("http")) {
        setPreviewUrl(value);
        setPreviewType("video");
      } else {
        setPreviewUrl(null);
        setPreviewType(null);
      }
    }
  };

  useEffect(() => {
    if (mode === "edit" && initialData?.video) {
      const val = initialData.video;
      const ytEmbed = typeof val === "string" ? getEmbedUrl(val) : null;

      if (ytEmbed) {
        setPreviewUrl(ytEmbed);
        setPreviewType("youtube");
      } else {
        setPreviewUrl(val);
        setPreviewType("video");
      }
    }
  }, [mode, initialData]);

  const handleSubmit = () => {
    if (!form.title || !form.subtitle || !form.video) {
      alert("Please fill all fields!");
      return;
    }
    onSave(form);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg w-[600px] space-y-4 max-h-[90vh] shadow-lg overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Upload"} Video</h2>
          <button
            onClick={onClose}
            className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-herobg/50 text-midnight_text transition-colors hover:bg-herobg hover:text-gray sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            <RxCross2 size={20} />
          </button>
        </div>

        {mode === "delete" ? (
          <p>Are you sure you want to delete this video?</p>
        ) : (
          <>
            <input
              name="title"
              placeholder="Title"
              className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
              value={form.title}
              onChange={handleInputChange}
            />

            <input
              name="subtitle"
              placeholder="Subtitle"
              className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
              value={form.subtitle}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Youtube or video URL"
              name="video"
              value={typeof form.video === "string" ? form.video : ""}
              onChange={handleInputChange}
              className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
            />
            {previewUrl && (
              <div className="mt-3">
                <p className="font-medium mb-2">Video Preview:</p>

                {previewType === "youtube" && (
                  <iframe
                    src={previewUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-60 rounded-md border"
                  ></iframe>
                )}

                {previewType === "video" && (
                  <video
                    src={previewUrl}
                    controls
                    className="w-full h-60 rounded-md border"
                  />
                )}
              </div>
            )}
          </>
        )}

        <div className="flex justify-end gap-3 mt-6">
                            <button
                                className="bg-gray/30 cursor-pointer flex items-center gap-2 px-3 py-1 rounded hover:bg-gray/20"
                                onClick={onClose}
                            >
                                <span>Cancel</span>
                                <GiCancel className="text-midnight_text" />
                            </button>
                            <button
                                className={`${mode === "delete" ? "bg-red-600" : "bg-primary"
                                    } text-white px-3 py-1 flex items-center gap-2 cursor-pointer rounded hover:opacity-90`}
                                onClick={handleSubmit}
                            >
                                <span>{mode === "delete" ? "Delete" : "Save"}</span>
                                {
                                    loading ? <FiLoader size={15} className="animate-spin" /> :
                                        <LiaCheckCircle size={18} />
                                }
                            </button>
                        </div>
      </div>
    </div>
  );
}
