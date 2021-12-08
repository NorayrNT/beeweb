import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { userObj } from './interfaces/user_obj.interface';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email, pass) {
        const user = await this.usersService.checkByEmail(email);
        if(user) {
            const check = await bcrypt.compare(pass.toString(), user.password);
            if(check) {
                return user;
            }
        }
        return null;
    }

    // Login
    async login(userObj: any) {
        const payload = { email: userObj.email, sub: userObj.id }
        return {
            access_token: await this.jwtService.sign(payload)
        } 
    }

}
