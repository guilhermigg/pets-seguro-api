import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class PlanDTO {
    id?: string

    @IsNotEmpty()
    @Length(3, 80)
    @ApiProperty()
    name: string

    @IsNotEmpty()
    @ApiProperty()
    benefits: string[]

    @IsNotEmpty()
    @ApiProperty()
    price: number
}