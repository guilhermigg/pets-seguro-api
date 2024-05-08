import { Body, Param, Controller, Post, Get, Delete, Put, UseGuards, Request } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";
import { PlanRepository } from "src/repositories/plan_repository";
import { PlanDTO } from "src/dto/plan.dto";

@ApiBearerAuth()
@Controller('plans')
@ApiTags('plans')
export class PlanController {
    constructor(private planRepository: PlanRepository) {}

    @UseGuards(AuthGuard)
    @Post()
    async postPlan(@Body() body: PlanDTO): Promise<void> {
        await this.planRepository.create(body);
    }

    @Get(':id')
    async getPlan(@Param('id') id : string) : Promise<PlanDTO> {
        const plan = await this.planRepository.get(id);
        return plan;
    }

    @Get()
    async listPlans() : Promise<PlanDTO[]> {
        const plans = await this.planRepository.list();
        return plans;
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deletePlan(@Param(':id') id : string) : Promise<void> {
        await this.planRepository.delete(id);
    }

    @UseGuards(AuthGuard)
    @Put()
    async updatePlan(@Body() body : PlanDTO) : Promise<void> {
        await this.planRepository.update(body);
    }
}