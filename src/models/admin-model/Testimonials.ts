import { model, models, Schema } from "mongoose";
const testimonialSchema = new Schema({
    fullName: { type: String, require: true },
    review: { type: String, require: true },
    rating: { type: Number, require: true },
    image: { type: String, required: true },
    image_public_Id: { type: String, required: true },
})
export default models.Testimonial || model("Testimonial", testimonialSchema)