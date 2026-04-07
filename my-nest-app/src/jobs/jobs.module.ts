import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { BullModule } from '@nestjs/bullmq';
@Module({
  imports: [
    BullModule.registerQueue({ name: 'tasks' }),
  ],
  providers: [JobsService],
  exports: [JobsService],
})
export class JobsModule {}