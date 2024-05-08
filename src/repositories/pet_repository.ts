import { PetDTO } from "src/dto/pet.dto";
import { UserDTO } from "src/dto/user.dto";

export abstract class PetRepository {
    abstract create(body : PetDTO, user : UserDTO) : Promise<void>
    abstract get(id: string) : Promise<PetDTO>
    abstract list() : Promise<PetDTO[]>
    abstract update(body : PetDTO) : Promise<void>
    abstract delete(id: string) : Promise<void>
}