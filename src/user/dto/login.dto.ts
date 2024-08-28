/* eslint-disable prettier/prttier*/

import { IsNotEmpty, IsString } from "class-validator";


export class loginDto {
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}