import { Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express";

//the auth is the prefixe route
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
        //which literally means : i dont care how u'd instanciate it just
        //give me an instance from that auth service, 

        @Post('signup')
        signup(@Req() req:Request){
            return this.authService.signup()
        }

        @Post('signin')
        signin(){
            return this.authService.signin()
        }
    
}