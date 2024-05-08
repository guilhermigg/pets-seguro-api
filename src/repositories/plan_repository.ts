
import { PlanDTO } from "src/dto/plan.dto";

export abstract class PlanRepository {
    abstract create(body: PlanDTO) : Promise<void>
    abstract get(id: string) : Promise<PlanDTO>
    abstract list() : Promise<PlanDTO[]>
    abstract update(body : PlanDTO) : Promise<void>
    abstract delete(id: string) : Promise<void>
}