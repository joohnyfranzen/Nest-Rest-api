import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signin(@Body() dto: AuthDto) {
        
        console.log({dto});
        if(!dto.email)
        return this.authService.signup();
    }

    @Post('signin')
    signup() {
        return this.authService.signin();
    }

}