import { Body, Param, Controller, Post, Get, Delete, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserDTO } from "src/dto/user.dto";
import { UserRepository } from "src/repositories/user_repository";
import { AuthGuard } from "src/auth/auth.guard";

@ApiBearerAuth()
@Controller('users')
@ApiTags('users')
export class UserController {
    constructor(private userRepository : UserRepository) {}

    @Post()
    @UseGuards(AuthGuard)
    async postUser(@Body() body: UserDTO): Promise<void> {
        await this.userRepository.create(body);
    }

    @Get(':id')
    async getUser(@Param('id') id : string) : Promise<UserDTO> {
        const user = await this.userRepository.get(id);
        return user;
    }

    @Get()
    async listUsers() : Promise<UserDTO[]> {
        const users = await this.userRepository.list();
        return users;
    }

    @Delete(':id')
    async deleteUser(@Param(':id') id : string) : Promise<void> {
        await this.userRepository.delete(id);
    }
}