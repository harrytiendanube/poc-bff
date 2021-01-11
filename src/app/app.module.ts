import * as path from 'path';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'auth';
import { FeatureModule } from 'domains/feature';

@Module({
  imports: [AuthModule, FeatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
