import { Body, Controller, Post, HttpException } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "src/auth/auth.service";
import { AuthDTO } from "src/dto/auth.dto";

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(
        private authService : AuthService
    ) {}

    @Post('login')
    async login(@Body() body: AuthDTO): Promise<string> {
        const token = await this.authService.validateUserLogin(body);
        if(!token) throw new HttpException('Credenciais inválidas', 401);
        return token
    }
}
