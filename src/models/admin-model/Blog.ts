import { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: String, required: true },
  hashtag: { type: String, required: true },
  image_public_Id: { type: String, required: true },
  slug: { type: String, required: true },
  schemaMarkup: { type: Schema.Types.Mixed },
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
  metakeywords: {
    type: [String], default: [], required: true 
  },
},
  { timestamps: true }
)

export default models.Blog || model("Blog", blogSchema);

