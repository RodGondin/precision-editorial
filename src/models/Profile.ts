import { Schema, model, models } from "mongoose";

const profileSchema = new Schema(
  {
    authUserId: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true },
    plan: { type: String, default: "free" },
  },
  { timestamps: true, versionKey: false },
);

export const Profile = models.Profile || model("Profile", profileSchema);
