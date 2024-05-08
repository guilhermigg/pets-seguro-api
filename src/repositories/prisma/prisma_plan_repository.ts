import { PrismaService } from "src/database/prisma.service";
import { Injectable } from "@nestjs/common";
import { PlanRepository } from "../plan_repository";
import { PlanDTO } from "src/dto/plan.dto";

@Injectable()
export class PrismaPlanRepository implements PlanRepository {
    constructor(
        private prisma: PrismaService,
    ) {}

    async create(body: PlanDTO): Promise<void> {
        await this.prisma.plan.create({
            data: {
                ...body,
            }
        });

        return;
    }

    async get(id: string) : Promise<PlanDTO> {
        const plan : PlanDTO = await this.prisma.plan.findFirst({where: {id}});
        return plan
    }

    async list() : Promise<PlanDTO[]> {
        const plans : PlanDTO[] = await this.prisma.plan.findMany();
        return plans;
    }

    async update(plan: PlanDTO) : Promise<void> {
        await this.prisma.plan.update({
            where: {id: plan.id},
            data: plan
        })
    }

    async delete(id: string) : Promise<void> {
        await this.prisma.user.delete({where: {id: id}});
    }
}