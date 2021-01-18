import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import config from './auth.config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { TokenStrategy } from './token.strategy';
import { UsersModule } from 'common/users/users.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forFeature(config),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get('auth.secret'),
        signOptions: {
          expiresIn: +config.get('auth.expire_in'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, TokenStrategy],
  exports: [PassportModule, JwtModule, AuthService],
})
export class AuthModule {}
