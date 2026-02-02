"use client";
import { useState } from "react";
import ImageUploader from "../../common/ImageUploader";
import { LiaCheckCircle } from "react-icons/lia";
import { FiLoader } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import Label from "../../form/Label";
import Tooltip from "../../common/Tooltip";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PhotoModal({ mode, onClose, onSave, initialData }: any) {

    const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
        null
    );
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(initialData || { title: "", subtitle: "", image: "", public_Id: "" });


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
        setLoading(true);
        if (!form.title || !form.subtitle || !form.image || !form.public_Id) {
            showTooltip("Please fill all fields!", "error");
            setLoading(false);
            return;
        }
        onSave(form);
    };

    return (
        <div onClick={onClose} className="fixed inset-0 bg-opacity-50  flex bg-black/60 items-center justify-center z-50">
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg w-[600px] space-y-4 max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Upload"} Photo</h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-herobg/50 text-midnight_text transition-colors hover:bg-herobg hover:text-gray sm:right-6 sm:top-6 sm:h-11 sm:w-11"
                    >
                        <RxCross2 size={20} />
                    </button>
                </div>

                {mode === "delete" ? (
                    <p>Are you sure you want to delete this photo?</p>
                ) :
                    (
                        <>
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
                                        name="subtitle"
                                        placeholder="Subtitle"
                                        className="border w-full p-2 rounded border-border shadow-md shadow-skyBlue/20 outline-none"
                                        value={form.subtitle}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <ImageUploader label="Photo" folder="Gallery-Photo"

                                onUpload={(url, public_Id) => setForm({ ...form, image: url || "", public_Id: public_Id || null })}
                                defaultPreview={form.image}
                            />
                        </>
                    )
                }
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
