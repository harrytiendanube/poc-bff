import { Injectable } from '@nestjs/common';
import { AuthService } from 'auth';
import { UsersService } from 'common/users';

// /class ClienteService

@Injectable()
export class ApiClientService {
  constructor(private readonly userService: UsersService) {}

  getSomething(): Record<string, string> {
    const user = this.userService.getUser();
    return {
      some: user.username,
    };
  }
}
