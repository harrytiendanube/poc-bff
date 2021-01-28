import { Injectable } from '@nestjs/common';

 import { FeatureClientService } from './feature-client';

@Injectable()
export class FeatureService {
  constructor(private readonly featureClientService: FeatureClientService) {}

  async find(): Promise<Record<string, string>> {
    const result = await this.featureClientService.getSomething();
    return result;
  }

  async one(): Promise<Record<string, string>> {
    const result = await this.featureClientService.getTokenUser();
    return result;
  }
}
