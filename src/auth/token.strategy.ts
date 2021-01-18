import { UniqueTokenStrategy } from 'passport-unique-token';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class TokenStrategy extends PassportStrategy(UniqueTokenStrategy) {
  constructor(private authService: AuthService) {
    super({ tokenHeader: 'X-Access-Token' });
  }

  async validate(token: string): Promise<any> {
    const isValid = await this.authService.validateToken(token);
    console.log(token);
    return isValid;
  }
}
