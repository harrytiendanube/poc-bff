import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { User, UsersService } from 'common/users';
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
    const user = await this.usersService.findByLogin(loginUserDto);
    const token = this._createToken(user);

    return {
      username: user.user,
      ...token,
    };
  }

  private _createToken({ username }: Record<string, string>): any {
    const user: JwtPayload = { username };
    const accessToken = this.jwtService.sign(user);
    return {
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<Record<string, string>> {
    this.usersService.setUser({ username: payload.username });

    return { user: payload.username };
  }

  async validateToken(token: string): Promise<boolean> {
    this.usersService.setToken(token);

    return true;
  }
}
