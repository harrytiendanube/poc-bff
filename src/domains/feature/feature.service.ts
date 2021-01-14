import { Injectable } from '@nestjs/common';

import { ApiClientService } from 'common';
import { FeatureClientService } from './feature.client.service';

@Injectable()
export class FeatureService {
  constructor(private readonly featureClientService: FeatureClientService) {}

  async find(): Promise<Record<string, string>> {
     await this.featureClientService.getSomething();
     return { a: '1' };
  }
}
