import { Injectable } from "@nestjs/common";
import { AuthDTO } from "src/dto/auth.dto";
import { UserRepository } from "src/repositories/user_repository";
import { BCryptService } from "src/auth/bcrypt.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private userRepository : UserRepository,
        private bcryptService : BCryptService,
        private jwtService: JwtService
    ) {}

    async validateUserLogin(authPayload : AuthDTO) : Promise<string> {
        const user = await this.userRepository.get(authPayload.email);
        if(!user) return null

        const match = await this.bcryptService.comparePassword(authPayload.password, user.password);
        if(!match) return null
        
        return await this.jwtService.signAsync(user);
    }
}