import { HttpService, Injectable } from '@nestjs/common';
import { UsersService } from 'common/users';

@Injectable()
export class ApiClientService {
  constructor(
    private readonly userService: UsersService,
    private readonly httpService: HttpService,
  ) {}

  getSomething(): Record<string, string> {
    const user = this.userService.getUser();
    return {
      some: user.username,
      baseURL: this.httpService.axiosRef.defaults.baseURL,
    };
  }

  setToken() {
    this.httpService.axiosRef.defaults.headers = { Autorization: '123' };
  }
}
