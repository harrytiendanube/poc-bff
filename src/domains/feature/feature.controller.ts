import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { TokenAuthGuard } from 'auth/token-auth.guard';
import { FeatureService } from './feature.service';

@Controller('feature')
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}
  @Get()
  @UseGuards(AuthGuard())
  async find(): Promise<Record<string, string>> {
    return await this.featureService.find();
  }

  @Get('other')
  @UseGuards(TokenAuthGuard)
  async other(): Promise<any> {
    return await this.featureService.one();
  }
}
