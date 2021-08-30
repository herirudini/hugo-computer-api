import mongoose, { Schema } from "mongoose";

export interface User extends mongoose.Document {
  email: string;
  password: string;
  full_name: string;
  address: string;
  logIp: string[];
  masterkey: string;
}

export const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, default: null, select: false },
    full_name: { type: String, required: true },
    address: { type: Schema.Types.ObjectId, ref: "Address" },
    logIp: [{ type: String }],
    masterkey: { type: String, select: false },
  },
  { timestamps: true }
);
