import { Injectable } from '@nestjs/common';

import { ApiClientService, ApplyTokenApi } from 'common';

@Injectable()
@ApplyTokenApi()
export class FeatureClientService extends ApiClientService {
  async getSomething(): Promise<Record<string, string>> {
    await this.httpService.get('/').toPromise();

    return { a: '1' };
  }

  async getTokenUser(): Promise<Record<string, string>> {
    return { a: '2' };
  }
}
