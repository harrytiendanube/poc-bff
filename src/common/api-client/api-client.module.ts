import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersModule } from 'common/users/users.module';
import { ApiClientService } from './api-client.service';
import config from './api-client.config';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forFeature(config),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        baseURL: config.get('api-client.url'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [ApiClientService],
  exports: [ApiClientService],
})
export class ApiClientModule {}
