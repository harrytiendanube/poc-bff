import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(
    @Body() loginUserDto: Record<string, string>,
  ): Promise<Record<string, string>> {
    return await this.authService.login(loginUserDto);
  }
}
