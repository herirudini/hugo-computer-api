import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Body,
  Param,
} from "@nestjs/common";
import { UserService } from "./user.service";
import bcrypt from "bcrypt";

@Controller("user")
export class UserController {
  constructor(private readonly UserSrv: UserService) {}
  @Get()
  getAllUser() {
    return this.UserSrv.getAllUser();
  }

  @Post()
  async createUser(
    @Body("email") inputEmail: string,
    @Body("password") inputPassword: string,
    @Body("full_name") inputFullName: string
    // @Body("address") inputAddress: string
  ) {
    const createUser = await this.UserSrv.createUser({
      email: inputEmail,
      password: inputPassword,
      full_name: inputFullName,
      // address: inputAddress,
    });
    console.log(createUser);
    return createUser;
  }
  // @Patch
  // @Delete
}
