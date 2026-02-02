import { Schema, model, models } from "mongoose";

const HotelLocationSchema = new Schema({
  hotelLocation: { type: String, required: true },
  focusOn: { type: String, required: true },
  locationFeatures: { type: [String], default: [], required: true },
  whyChooseLocation: { type: String, required: true },
  image: { type: String, required: true },
  image_public_Id: { type: String, required: true },
},
  { timestamps: true }
)

export default models.HotelLocation || model("HotelLocation", HotelLocationSchema);

