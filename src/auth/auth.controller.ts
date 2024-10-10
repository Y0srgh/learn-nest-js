import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

//the auth is the prefixe route
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
        //which literally means : i dont care how u'd instanciate it just
        //give me an instance from that auth service, 

        @Post('signup')
        signup(@Body() dto: AuthDto){
            console.log(dto);
            
            return this.authService.signup()
        }

        @Post('signin')
        signin(){
            return this.authService.signin()
        }
    
}