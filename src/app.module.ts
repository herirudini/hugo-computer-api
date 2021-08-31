import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UserModule, MongooseModule.forRoot(process.env.DATABASE as string)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
