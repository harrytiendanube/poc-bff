import { Module } from '@nestjs/common';
import { UsersModule } from 'common/users/users.module';
import { ApiClientService } from './api-client.service';

@Module({
  imports: [UsersModule],
  providers: [ApiClientService],
  exports: [ApiClientService],
})
export class ApiClientModule {}
