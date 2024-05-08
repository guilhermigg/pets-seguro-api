
import { Body, Param, Controller, Post, Get, Delete, Put, HttpException } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "src/auth/auth.service";
import { AuthDTO } from "src/dto/auth.dto";
import { UserRepository } from "src/repositories/user_repository";

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(
        private userRepository : UserRepository,
        private authService : AuthService
    ) {}

    @Post('login')
    async login(@Body() body: AuthDTO): Promise<string> {
        const token = await this.authService.validateUserLogin(body);
        if(!token) throw new HttpException('Credenciais inválidas', 401);
        return token
    }
}