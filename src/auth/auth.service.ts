import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login(
    loginUserDto: Record<string, string>,
  ): Promise<Record<string, string>> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);

    console.log('authser', this.config.get('auth'));

    return {
      username: user.user,
      ...token,
    };
  }

  private _createToken({ username }: Record<string, string>): any {
    const user: JwtPayload = { username };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 1000,
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<Record<string, string>> {
    // const user = await this.usersService.findByPayload(payload);
    // if (!user) {
    //   throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    // }
    return { user: payload.username };
  }
}
