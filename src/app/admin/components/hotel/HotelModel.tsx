"use client";
import ImageUploader from "../common/ImageUploader";
import { useState } from "react";
import Label from "../form/Label";
import Tooltip from "../common/Tooltip";
import { RxCross2 } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { FiLoader } from "react-icons/fi";
import { LiaCheckCircle } from "react-icons/lia";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HotelModel = ({ mode, onClose, onSave, initialData, hotelLocation }: any) => {
  const [loading, setLoading] = useState(false);
  const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
    null
  );

  const images = new Array(4);
  const [form, setForm] = useState(
    initialData || {
      hotelName: "",
      hotelLocation: "",
      nearByHotelLocation: "",
      rating: 1,
      hotelAmenities: "",
      suitableFor: "",
      aboutOfHotel: "",
      hotelFoodTitle: "",
      hotelFoodDescription: "",
      hotelPolicies: "",
      whatGuestSaid: "",
      googleMapUrl: "",
      image_1: "",
      image_1_public_Id: "",
      image_2: "",
      image_2_public_Id: "",
      image_3: "",
      image_3_public_Id: "",
      image_4: "",
      image_4_public_Id: "",
    }
  );

  console.log("Initial data is --> ", initialData)

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
      !form.hotelName ||
      !form.hotelLocation ||
      !form.rating ||
      !form.hotelAmenities ||
      !form.nearByHotelLocation ||
      !form.aboutOfHotel ||
      !form.hotelFoodTitle ||
      !form.hotelFoodDescription ||
      !form.hotelPolicies ||
      !form.googleMapUrl ||
      !form.image_1 ||
      !form.image_1_public_Id ||
      !form.image_2 ||
      !form.image_2_public_Id ||
      !form.image_3 ||
      !form.image_3_public_Id ||
      !form.image_4 ||
      !form.image_4_public_Id
    ) {
      showTooltip("Please fill all fields!", "error");
      setLoading(false);
      return;
    }
    console.log("Form is --> ", form);
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60">
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <div
        className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[550px]" : "max-w-[1150px]"}  max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar` } onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Add"} Hotel</h2>
          <button
            onClick={onClose}
            className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-herobg/50 text-midnight_text transition-colors hover:bg-herobg hover:text-gray sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            <RxCross2 size={20} />
          </button>
        </div>

        {mode === "delete" ? (
          <p>Are you sure want to delete this hotel?</p>
        ) : (
          <>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Hotel Name</Label>
                  <input
                    name="hotelName"
                    placeholder="Hotel Name"
                    className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
                    value={form.hotelName}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <Label>Hotel Location</Label>
                  <select
                    name="hotelLocation"
                    className="border w-full p-2 rounded cursor-pointer border-border shadow-md shadow-skyBlue/20 outline-none"
                    value={form.hotelLocation}
                    onChange={handleChange}
                  >
                    <option value="">Select Hotel Location</option>
                    {
                      hotelLocation?.map((item: any, index: number) => (
                        <option key={index} value={item.hotelLocation}>{item.hotelLocation}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Near By Hotel Location</Label>
                  <input
                    name="nearByHotelLocation"
                    placeholder="Near By Hotel Location"
                    className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
                    value={form.nearByHotelLocation}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <Label>Suitable</Label>
                  <input
                    name="suitableFor"
                    placeholder="Hotel Suitable For"
                    className="border w-full p-2 rounded border-border shadow-md shadow-skyBlue/20 outline-none"
                    value={form.suitableFor}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
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
                  <Label>Hotel Food </Label>
                  <input
                    name="hotelFoodTitle"
                    placeholder="Hotel Food"
                    className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
                    value={form.hotelFoodTitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <Label>Hotel Food Description</Label>
                  <input
                    name="hotelFoodDescription"
                    placeholder="Hotel Food Description"
                    className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
                    value={form.hotelFoodDescription}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>What Guest Said</Label>
                  <input
                    name="whatGuestSaid"
                    placeholder="What About Guest Said...(Optional)"
                    className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
                    value={form.whatGuestSaid}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <Label>Google Map Url Of Hotel</Label>
                  <input
                    name="googleMapUrl"
                    placeholder="Google Map Url Of Hotel"
                    className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full p-2 rounded"
                    value={form.googleMapUrl}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full">
                <Label>Hotel About Us</Label>
                <textarea
                  name="aboutOfHotel"
                  value={form.aboutOfHotel}
                  placeholder="About hotel..."
                  rows={5}
                  onChange={handleChange}
                  className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full resize-none p-2 rounded"
                />
              </div>

              <div className="w-full">
                <Label>Hotel Amenities</Label>
                <textarea
                  name="hotelAmenities"
                  value={form.hotelAmenities}
                  placeholder="Hotel Amenities Comma Seprated..."
                  rows={5}
                  onChange={handleChange}
                  className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full resize-none p-2 rounded"
                />
              </div>
              <div className="w-full">
                <Label>Hotel Policies</Label>
                <textarea
                  name="hotelPolicies"
                  value={form.hotelPolicies}
                  placeholder="Hotel Policies Comma Seprated..."
                  rows={5}
                  onChange={handleChange}
                  className="border border-border shadow-md shadow-skyBlue/20 outline-none w-full resize-none p-2 rounded"
                />
              </div>
              <Label>Hotel Images</Label>
              <ImageUploader
                label="Hotel Image 1"
                folder="hotle"
                onUpload={(url, public_Id) => setForm({ ...form, image_1: url || "", image_1_public_Id: public_Id || null })}
                defaultPreview={form.image_1}
              />
              <ImageUploader
                label="Hotel Image 2"
                folder="hotle"
                onUpload={(url, public_Id) => setForm({ ...form, image_2: url || "", image_2_public_Id: public_Id || null })}
                defaultPreview={form.image_2}
              />
              <ImageUploader
                label="Hotel Image 3"
                folder="hotle"
                onUpload={(url, public_Id) => setForm({ ...form, image_3: url || "", image_3_public_Id: public_Id || null })}
                defaultPreview={form.image_3}
              />
              <ImageUploader
                label="Hotel Image 4"
                folder="hotle"
                onUpload={(url, public_Id) => setForm({ ...form, image_4: url || "", image_4_public_Id: public_Id || null })}
                defaultPreview={form.image_4}
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



