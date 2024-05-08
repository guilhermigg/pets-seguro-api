import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { JwtModule } from "@nestjs/jwt"
import { UserRepository } from './repositories/user_repository';
import { PrismaUserRepository } from './repositories/prisma/prisma_user_repository';
import { UserController } from './controllers/user.controller';
import { BCryptService } from './auth/bcrypt.service';
import { AuthService } from "./auth//auth.service";
import { AuthController } from './controllers/auth.controller';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: '7d'}
    })
  ],
  controllers: [
    UserController,
    AuthController
  ],
  providers: [
    PrismaService,
    AuthService,
    BCryptService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    }
  ],
})

export class AppModule {}
