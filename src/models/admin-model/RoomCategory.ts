import { model, models, Schema } from "mongoose";

const roomCategorySchema = new Schema({
    category : {type: String, required:true}
},
    {timestamps:true}
)

export default models.RoomCategory || model("RoomCategory", roomCategorySchema)