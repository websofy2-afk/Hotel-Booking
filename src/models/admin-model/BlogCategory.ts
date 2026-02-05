import { model, models, Schema } from "mongoose";

const BlogCategorySchema = new Schema(
  {
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.BlogCategory || model("BlogCategory", BlogCategorySchema);