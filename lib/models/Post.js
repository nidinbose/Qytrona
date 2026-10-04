import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 160 },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    excerpt: { type: String, trim: true, maxlength: 300, default: "" },
    content: { type: String, required: true },
    coverImage: { type: String, trim: true, default: "" },
    category: { type: String, trim: true, default: "General" },
    tags: { type: [String], default: [] },
    author: { type: String, trim: true, default: "Qytrona Team" },
    status: { type: String, enum: ["draft", "published"], default: "draft", index: true },
    publishedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
