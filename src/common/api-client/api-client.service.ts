import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'common/users';
import { Config } from 'nestjs-config';

@Injectable()
export class ApiClientService {
  constructor(
    protected userService: UsersService,
    public httpService: HttpService,
    config: ConfigService, 
  ) {
    this.httpService.axiosRef.defaults.baseURL = config.get('api-client.url')
  }

  // getSomething(): Record<string, string> {
  //   const user = this.userService.getUser();
    
  //   return {
  //     some: user.username,
  //     baseURL: this.httpService.axiosRef.defaults.baseURL,
  //   };
  // }

  setToken() {
    const headers = {...this.httpService.axiosRef.defaults.headers, Autorization: '123' }
    this.httpService.axiosRef.defaults.headers = headers;
  }
}
