import { Injectable } from '@nestjs/common';

export class User {
         public username: string;
         public token: string;
       }

@Injectable()
export class UsersService {
  private user: User;
  constructor() {
    this.user = new User();
  }

  setUser(user: Record<string, string>) {
    this.user.username = user.username;
  }

  getUser() {
    return this.user;
  }

  setToken(token: string) {
    this.user.token = token;
  }

  getToken(): string {
    return this.user.token;
  }

  async findByLogin({
    username,
    password,
  }: Record<string, string>): Promise<Record<string, string>> {
    return { username };
  }
}
