import { HttpModule, HttpService, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersModule } from 'common/users/users.module';
import { ApiClientService } from './api-client.service';
import config from './api-client.config';
import { UsersService } from 'common/users';

@Module({
  imports: [UsersModule, ConfigModule.forFeature(config), HttpModule],
  providers: [ApiClientService],
  exports: [ApiClientService],
})
export class ApiClientModule {}
