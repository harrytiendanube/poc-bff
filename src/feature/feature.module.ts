import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { FeatureController } from './feature.controller';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [FeatureController],
})
export class FeatureModule {}
