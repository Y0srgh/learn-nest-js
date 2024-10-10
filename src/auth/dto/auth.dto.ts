import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

//to use validator we need a class not an interface
export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string
}