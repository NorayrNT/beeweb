import { Body, Controller, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { userObj } from './interfaces/user_obj.interface';

@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async login(@Req() req) {
        const {access_token} = await this.authService.login(req.user);
        
        let response = {
            user: req.user,
            token: access_token
        }

        return response;
    }
}
