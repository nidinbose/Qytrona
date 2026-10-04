// Creates the admin account from .env.local, or updates its password/name if it already exists.
// Usage: npm run seed:admin
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { MONGODB_URI, ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME = "Admin" } = process.env;

if (!MONGODB_URI || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("Set MONGODB_URI, ADMIN_EMAIL and ADMIN_PASSWORD in .env.local first.");
  process.exit(1);
}
if (ADMIN_PASSWORD.length < 10) {
  console.error("ADMIN_PASSWORD must be at least 10 characters.");
  process.exit(1);
}

const Admin =
  mongoose.models.Admin ||
  mongoose.model(
    "Admin",
    new mongoose.Schema(
      {
        name: String,
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        passwordHash: { type: String, required: true },
        lastLoginAt: Date,
      },
      { timestamps: true }
    )
  );

await mongoose.connect(MONGODB_URI);
const email = ADMIN_EMAIL.trim().toLowerCase();
const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);
const existing = await Admin.findOne({ email });

await Admin.updateOne({ email }, { $set: { name: ADMIN_NAME, passwordHash } }, { upsert: true });
console.log(`${existing ? "Updated" : "Created"} admin account: ${email}`);
await mongoose.disconnect();
