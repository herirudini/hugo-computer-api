import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(inputEmail: string, inputPassword: string): Promise<any> {
    const user = await this.usersService.checkUser(inputEmail);
    if (user && user.password === inputPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signJwt(user: any) {
    const payload = { user_id: user.user_id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
