import { UserDTO } from "src/dto/user.dto";
import { UserRepository } from "../user_repository";
import { PrismaService } from "src/database/prisma.service";
import { Injectable } from "@nestjs/common";
import { user_role } from "@prisma/client";
import { BCryptService } from "src/auth/bcrypt.service";

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(
        private prisma: PrismaService,
        private bcrypt: BCryptService
    ) {}

    async create(body: UserDTO): Promise<void> {
        const hashedPassword = await this.bcrypt.encryptPassword(body.password);

        await this.prisma.user.create({
            data: {
                ...body,
                password: hashedPassword,
                role: user_role.ADMIN
            }
        });

        return;
    }

    async get(email: string) : Promise<UserDTO> {
        const user : UserDTO = await this.prisma.user.findFirst({where: {email}});
        return user
    }

    async list() : Promise<UserDTO[]> {
        const users : UserDTO[] = await this.prisma.user.findMany({where: {active: true}});
        return users;
    }

    async update(user: UserDTO) : Promise<void> {
        await this.prisma.user.update({
            where: {id: user.id},
            data: user
        })
    }

    async delete(id: string) : Promise<void> {
        await this.prisma.user.delete({where: {id: id}});
    }
}