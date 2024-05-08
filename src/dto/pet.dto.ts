import { ApiProperty } from "@nestjs/swagger";
import { pet_type } from "@prisma/client";
import { IsNotEmpty, Length } from "class-validator";

export class PetDTO {
    id?: string

    @IsNotEmpty()
    @Length(3, 80)
    @ApiProperty()
    name: string

    @IsNotEmpty()
    @ApiProperty()
    breed: string

    @IsNotEmpty()
    @ApiProperty()
    type: pet_type
}