import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, default: "Admin", trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    lastLoginAt: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
