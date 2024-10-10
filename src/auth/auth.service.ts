import { Injectable } from "@nestjs/common";


//from the doc :
//The @Injectable() decorator attaches metadata, 
//which declares that AuthService is a class that 
//can be managed by the Nest IoC container
@Injectable({})
export class AuthService {
    signin(){
        return {msg: 'I am signed in'}
    }
    signup(){
        return {msg:"I have signed up"}
    }
}