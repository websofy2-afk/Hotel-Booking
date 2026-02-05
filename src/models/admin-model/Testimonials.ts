import { model, models, Schema } from "mongoose";
const testimonialSchema = new Schema({
    fullName: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String, required: true },
    image_public_Id: { type: String, required: true },
})
export default models.Testimonial || model("Testimonial", testimonialSchema)