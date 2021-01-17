import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from 'common/users/users.module';
import { ApiClientService } from './api-client.service';
import config from './api-client.config';

@Module({
  imports: [UsersModule, ConfigModule.forFeature(config), HttpModule],
  providers: [ApiClientService],
  exports: [ApiClientService],
})
export class ApiClientModule {}
