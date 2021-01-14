import { Injectable } from '@nestjs/common';

import { ApiClientService, ApplyTokenApi } from 'common';

@Injectable()
@ApplyTokenApi()
export class FeatureClientService extends ApiClientService {
  async getSomething(): Promise<Record<string, string>> {
    console.log(this.httpService.axiosRef.defaults.baseURL);
    console.log(this.httpService.axiosRef.defaults.headers);

    try {
      const a = await this.httpService.get('/asdf').toPromise();
      console.log(a.data);
    } catch (e) {
      console.log(e);
    }

    return { a: '123' };
  }
}
