import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  last_name: { type: String },
  city: { type: String, required: true },
  country: { type: String, required: true },
  date: { type: Date },
  photo: { type: String },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  active: { type: Boolean, default: false },
  time_stamps: { type: Date, default: Date.now },
});
const author = mongoose.model("Author", AuthorSchema);

export default author;
