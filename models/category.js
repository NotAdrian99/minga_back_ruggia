import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  hover: { type: String, required: true },
  description: { type: String, required: true },
  cover_photo: { type: String },
  character_photo: { type: String },
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  time_stamps: { type: Date, default: Date.now },
});
const category = mongoose.model("Category", CategorySchema);

export default category;
