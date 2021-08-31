import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Observable } from "rxjs";
import { User } from "./user.model";

@Injectable()
export class UserService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

  getAllUser() {
    const response = this.userModel.find();
    return response;
  }

  createUser(data: object) {
    const response = this.userModel.create(data);
    return response as object;
  }

  changeFullName(user_id: string, full_name: string) {
    const response = this.userModel.findByIdAndUpdate(
      user_id,
      { full_name },
      { new: true }
    );
    return response;
  }

  checkUser(email: string) {
    return this.userModel.findOne({ email });
  }
}
