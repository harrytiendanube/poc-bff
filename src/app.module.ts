import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FeatureModule } from './feature/feature.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    FeatureModule,
    ConfigModule.load(path.resolve(__dirname, '**/!(*.d).config.{ts,js}'), {
      modifyConfigName: name => name.replace('.config', ''),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
