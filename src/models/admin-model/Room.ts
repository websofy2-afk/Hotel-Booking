import { model, models, Schema } from "mongoose";

const roomSchema = new Schema({
    roomType: { type: String, required: true },
    oldPrice: { type: String, required: true },
    newPrice: String,
    noOfGuest: { type: String, required: true },
    bedType: { type: String, required: true },
    rating: { type: Number, required: true },
    roomAmenities: { type: [String], default: [], required: true },
    taxesAndFeePerNight: { type: String, required: true },
    roomRelatedToHotel: { type: String, required: true },
    hotelLocation: { type: String, required: true },
    image: { type: String, required: true },
    image_public_Id: { type: String, required: true },
},
    { timestamps: true }
)


export default models.Room || model("Room", roomSchema);