import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { JwtModule } from "@nestjs/jwt"
import { UserRepository } from './repositories/user_repository';
import { PrismaUserRepository } from './repositories/prisma/prisma_user_repository';
import { UserController } from './controllers/user.controller';
import { BCryptService } from './auth/bcrypt.service';
import { AuthService } from "./auth//auth.service";
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';
import { PetController } from './controllers/pet.controller';
import { PetRepository } from './repositories/pet_repository';
import { PrismaPetRepository } from './repositories/prisma/prisma_pet_repository';
import { PlanRepository } from './repositories/plan_repository';
import { PrismaPlanRepository } from './repositories/prisma/prisma_plan_repository';
import { PlanController } from './controllers/plan.controller';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: '2h'}
    })
  ],
  controllers: [
    AuthController,
    UserController,
    PetController,
    PlanController
  ],
  providers: [
    PrismaService,
    AuthService,
    BCryptService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    },
    {
      provide: PetRepository,
      useClass: PrismaPetRepository
    },
    {
      provide: PlanRepository,
      useClass: PrismaPlanRepository
    }
  ],
})

export class AppModule {}
