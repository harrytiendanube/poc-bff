import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findByLogin({
    username,
    password,
  }: Record<string, string>): Promise<Record<string, string>> {
    return { username };
  }
}
