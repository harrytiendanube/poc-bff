import { Module } from '@nestjs/common';
import { AuthModule } from 'auth';
import { ApiClientModule } from 'common';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';

@Module({
  imports: [AuthModule, ApiClientModule],
  controllers: [FeatureController],
  providers: [FeatureService],
})
export class FeatureModule {}
