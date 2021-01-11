import { Injectable } from '@nestjs/common';

import { ApiClientService } from 'common';

@Injectable()
export class FeatureService {
  constructor(private readonly apiClienteService: ApiClientService) {}

  find(): Record<string, string> {
    return this.apiClienteService.getSomething();
  }
}
