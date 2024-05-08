import { UserDTO } from "src/dto/user.dto";
import { PrismaService } from "src/database/prisma.service";
import { Injectable } from "@nestjs/common";
import { pet_type } from "@prisma/client";
import { PetRepository } from "../pet_repository";
import { PetDTO } from "src/dto/pet.dto";

@Injectable()
export class PrismaPetRepository implements PetRepository {
    constructor(
        private prisma: PrismaService,
    ) {}

    async create(body: PetDTO, user : UserDTO): Promise<void> {
        await this.prisma.pet.create({
            data: {
                ...body,
                owner_id: user.id
            }
        });
    }

    async get(id: string) : Promise<PetDTO> {
        const pet : PetDTO = await this.prisma.pet.findFirst({where: {id}});
        return pet
    }

    async list() : Promise<PetDTO[]> {
        const pets : PetDTO[] = await this.prisma.pet.findMany();
        return pets;
    }

    async update(pet: PetDTO) : Promise<void> {
        await this.prisma.pet.update({
            where: {id: pet.id},
            data: pet
        })
    }

    async delete(id: string) : Promise<void> {
        await this.prisma.pet.delete({where: {id: id}});
    }
}