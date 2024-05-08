import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { user_role } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsStrongPassword, Length } from "class-validator";

export class UserDTO {
    id?: string

    @IsNotEmpty()
    @Length(3, 80)
    @ApiProperty()
    name: string

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @Length(8, 120)
    @ApiProperty()
    @IsStrongPassword()
    password: string

    @IsNotEmpty()
    @ApiProperty()
    role: user_role 
}