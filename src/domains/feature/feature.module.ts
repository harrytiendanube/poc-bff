import { forwardRef, HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'auth';
import { ApiClientModule } from 'common';
import { UsersModule } from 'common/users/users.module';
import { FeatureClientService } from './feature-client.service';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';

@Module({
  imports: [AuthModule, ApiClientModule, UsersModule, HttpModule, ConfigModule],
  controllers: [FeatureController], 
  providers: [FeatureService, FeatureClientService],
})
export class FeatureModule {}
