import { model, models, Schema } from "mongoose";

const hotelSchema = new Schema({
    hotelName: { type: String, required: true },
    hotelLocation: { type: String, required: true },
    rating: { type: Number, required: true },
    hotelAmenities: { type: [String], default: [], required: true },
    suitableFor: String,
    nearByHotelLocation: { type: String, required: true },
    aboutOfHotel: { type: String, required: true },
    hotelFoodTitle: { type: String, required: true },
    hotelFoodDescription: { type: String, required: true },
    hotelPolicies: { type: [String], default: [], required: true },
    whatGuestSaid: String,
    googleMapUrl: { type: String, required: true },
    image_1: { type: String, required: true },
    image_1_public_Id: { type: String, required: true },
    image_2: { type: String, required: true },
    image_2_public_Id: { type: String, required: true },
    image_3: { type: String, required: true },
    image_3_public_Id: { type: String, required: true },
    image_4: { type: String, required: true },
    image_4_public_Id: { type: String, required: true },
},
    { timestamps: true }
)

export default models.Hotel || model("Hotel", hotelSchema);