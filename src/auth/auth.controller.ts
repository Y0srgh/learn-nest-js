import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

//the auth is the prefixe route
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
        //which literally means : i dont care how u'd instanciate it just
        //give me an instance from that auth service, 

        @Post('signup')
        signup(){
            return this.authService.signup()
        }

        @Post('signin')
        signin(){
            return this.authService.signin()
        }
    
}