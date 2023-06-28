import mongoose from "mongoose";

const MangaSchema = new mongoose.Schema({
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  company_id: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  title: { type: String, required: true },
  cover_photo: { type: String },
  description: { type: String },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  time_stamps: { type: Date, default: Date.now },
});

const manga = mongoose.model("Manga", MangaSchema);

export default manga;
