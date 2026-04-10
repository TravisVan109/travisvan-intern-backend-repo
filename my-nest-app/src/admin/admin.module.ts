import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AuthModule } from '../auth/auth.module';
@Module({
  controllers: [AdminController],
  imports: [AuthModule],
})
export class AdminModule {}