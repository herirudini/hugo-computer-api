import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Observable } from "rxjs";
import { User } from "./user.model";

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  getAllUser() {
    let response = this.userModel.find()
    return response;
  }

  createUser(data: object) {
    let response = this.userModel.create(data)
    return response as object;
  }

}
