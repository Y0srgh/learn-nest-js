import { ForbiddenException, Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

//from the doc :
//The @Injectable() decorator attaches metadata,
//which declares that AuthService is a class that
//can be managed by the Nest IoC container
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
   
    try {
        //generate the password
        const hash = await argon.hash(dto.password)

        //save the new user in the db
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash
            }
        });

        delete user.hash;

        //return the saved user
        return user;

    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code === "P2002"){
                throw new ForbiddenException('Credentials taken')
            }
        }
    }
  }

  signin() {
    return {
      msg: `I am signed in ${process.env.DATABASE_URL}`,
    };
  }
}
