import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Request,
  Body,
  Param,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

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
  ) {
    try {
      const validator: any = require("mongoose-validators");
      const createUser = await this.UserSrv.createUser({
        email: validator.isEmail(inputEmail),
        password: inputPassword,
        full_name: inputFullName,
      });
      return createUser;
    } catch (err) {
      return err;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch("change-name")
  async changeFullName(
    @Request() req,
    @Body("full_name") inputFullName: string
  ) {
    console.log(req.user)
    return this.UserSrv.changeFullName(req.user, inputFullName);
  }
  // @Delete
}
