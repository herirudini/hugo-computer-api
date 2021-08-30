import mongoose, { Schema } from "mongoose";
const validator: any = require("mongoose-validators");

// interface User {
//   email: string;
//   password: string;
//   full_name: string;
//   address: string;
//   logIp: string[];
//   masterkey: string;
// }

export interface User extends mongoose.Document {
  email: string;
  password: string;
  full_name: string;
  address: string;
  logIp: string[];
  masterkey: string;
}

// interface UserInterface extends mongoose.Model<User> {
//   build(attr: User): User;
// }

export const UserSchema = new Schema(
  {
    email: { type: String, required: true, validate: validator.isEmail() },
    password: { type: String, default: null, select: false },
    full_name: { type: String, required: true },
    address: { type: Schema.Types.ObjectId, ref: "Address" },
    logIp: [{ type: String }],
    masterkey: { type: String, select: false },
  },
  { timestamps: true }
);

// const User = mongoose.model<UserInterface>("User", UserSchema);
// export { User };
