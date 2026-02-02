"use client";
import { useState } from "react";
import Label from "../form/Label";
import Tooltip from "../common/Tooltip";
import { LiaCheckCircle } from "react-icons/lia";
import { FiLoader } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import ImageUploader from "../common/ImageUploader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TestimonialModel = ({ mode, onClose, onSave, initialData }: any) => {
    const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
        null
    );
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState(
        initialData || {
            fullName: "",
            review: "",
            rating: 1,
            image: "",
            image_public_Id: "",
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
        setLoading(true);
        if (
            !form.fullName ||
            !form.review ||
            !form.rating ||
            !form.image ||
            !form.image_public_Id
        ) {
            showTooltip("Please fill all fields!", "error");
            setLoading(false);
            return;
        }
        onSave(form);
    };

    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60" onClick={onClose}>
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <div
                className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[550px]" : "max-w-[800px]"}  max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar` } onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Create"} Testimonial</h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-herobg/50 text-midnight_text transition-colors hover:bg-herobg hover:text-gray sm:right-6 sm:top-6 sm:h-11 sm:w-11"
                    >
                        <RxCross2 size={20} />
                    </button>
                </div>

                {mode === "delete" ? (
                    <p>Are you sure want to delete this testimonial?</p>
                ) : (
                    <>
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                                <div className="w-full">
                                    <Label>Name</Label>
                                    <input
                                        name="fullName"
                                        placeholder="Name"
                                        className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
                                        value={form.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-full">
                                    <Label>Rating</Label>
                                    <select
                                        name="rating"
                                        className="border w-full p-2 rounded cursor-pointer border-border shadow-md shadow-skyBlue/20 outline-none"
                                        value={form.rating}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Rating</option>
                                        {
                                            [1, 2, 3, 4, 5].map((item: number, index: number) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="w-full">
                                    <Label>Rating Star</Label>
                                    <div
                                        className="border w-full p-2 h-10 cursor-not-allowed rounded border-border shadow-md shadow-skyBlue/20 outline-none"
                                    >
                                        <p className="text-yellow-500 w-full text-xl">{"★".repeat(form.rating)} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                                <div className="w-full">
                                    <Label>Review</Label>
                                    <textarea
                                        name="review"
                                        placeholder="Write your review here..."
                                        className="border w-full p-2 resize-none rounded border-border shadow-md shadow-skyBlue/20 outline-none"
                                        value={form.review}
                                        onChange={handleChange}
                                        rows={4}
                                    />
                                </div>
                            </div>

                            <Label>Image</Label>
                            <ImageUploader
                                label="Image"
                                folder="image"
                                onUpload={(url, public_Id) => setForm({ ...form, image: url || "", image_public_Id: public_Id || null })}
                                defaultPreview={form.image}
                            />
                        </div>
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



