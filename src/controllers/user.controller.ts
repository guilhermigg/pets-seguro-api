import { Body, Param, Controller, Post, Get, Delete, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserDTO } from "src/dto/user.dto";
import { UserRepository } from "src/repositories/user_repository";

@Controller('users')
@ApiTags('users')
export class UserController {
    constructor(private userRepository : UserRepository) {}

    @Post()
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