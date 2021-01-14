import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { FeatureService } from './feature.service';

@Controller('feature')
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}
  @Get()
  @UseGuards(AuthGuard())
  async find(): Promise<Record<string, string>> {
    return await this.featureService.find();
  }
}
