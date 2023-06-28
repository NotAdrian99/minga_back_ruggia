import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema({
  manga_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manga",
    required: true,
  },
  title: { type: String, required: true },
  cover_photo: { type: String },
  pages: { type: [String], default: [] },
  order: { type: Number },
  time_stamps: { type: Date, default: Date.now },
});

const chapter = mongoose.model("Chapter", ChapterSchema);

export default chapter;
