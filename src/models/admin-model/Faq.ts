import { model, models, Schema } from "mongoose";

const faqSchema = new Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
},
    { timestamps: true }
)

export default models.Faq || model("Faq", faqSchema)
