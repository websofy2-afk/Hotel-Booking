import mongoose, { Schema, Document } from "mongoose";

const EnquerySchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true},
  course: { type: String, required: true },
  info: { type: String, required: true},
},
  { timestamps: true }
);

export default mongoose.models.Enquery || mongoose.model("Enquery", EnquerySchema);
