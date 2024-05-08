import { UserDTO } from "src/dto/user.dto";

export abstract class UserRepository  {
    abstract create(body: UserDTO) : Promise<void>
    abstract get(email: string) : Promise<UserDTO>
    abstract list() : Promise<UserDTO[]>
    abstract update(body : UserDTO) : Promise<void>
    abstract delete(id: string) : Promise<void>
 }