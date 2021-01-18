import { Injectable } from '@nestjs/common';

import { ApiClientService, ApplyTokenApi } from 'common';

@Injectable()
@ApplyTokenApi()
export class FeatureClientService extends ApiClientService {
  async getSomething(): Promise<Record<string, string>> {
    // try {
    //   const a = await this.httpService.get('/asdf').toPromise();
    //   console.log(a.data);
    // } catch (e) {
    //   console.log(e);
    // }

    return { a: this.userService.getUser().username };
  }

  async getTokenUser(): Promise<Record<string, string>> {

    return { a: this.userService.getUser().token };
  }
}
