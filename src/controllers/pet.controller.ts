import { Body, Param, Controller, Post, Get, Delete, Put, UseGuards, Request } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserDTO } from "src/dto/user.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { PetRepository } from "src/repositories/pet_repository";
import { PetDTO } from "src/dto/pet.dto";

@ApiBearerAuth()
@Controller('pets')
@ApiTags('pets')
export class PetController {
    constructor(private petRepository: PetRepository) {}

    @UseGuards(AuthGuard)
    @Post()
    async postPet(@Request() req, @Body() body: PetDTO): Promise<void> {
        const user : UserDTO = req.user;
        await this.petRepository.create(body, user);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getPet(@Param('id') id : string) : Promise<PetDTO> {
        const pet = await this.petRepository.get(id);
        return pet;
    }

    @UseGuards(AuthGuard)
    @Get()
    async listPets() : Promise<PetDTO[]> {
        const users = await this.petRepository.list();
        return users;
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deletePet(@Param(':id') id : string) : Promise<void> {
        await this.petRepository.delete(id);
    }

    @UseGuards(AuthGuard)
    @Put()
    async updatePet(@Body() body : PetDTO) : Promise<void> {
        await this.petRepository.update(body);
    }
}