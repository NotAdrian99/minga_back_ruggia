import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String, required: true },
  role: { type: Number, default: 0 },
  online: { type: Boolean, default: false },
  verified: { type: Boolean, default: true },
  verify_code: { type: String },
  time_stamps: { type: Number },
});
const user = mongoose.model("User", UserSchema);

export default user;
