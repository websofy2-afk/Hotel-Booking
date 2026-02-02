import mongoose from "mongoose";

const BlogCategorySchema = new mongoose.Schema(
  {
    category: {type:String, required : true},
  },
  { timestamps: true }
);

export default mongoose.models.BlogCategory || mongoose.model("BlogCategory", BlogCategorySchema);