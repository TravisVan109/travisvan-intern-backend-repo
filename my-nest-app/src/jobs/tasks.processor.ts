import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('tasks')
export class TasksProcessor extends WorkerHost {
  async process(job: Job) {
    console.log(`Processing job: ${job.name}`, job.data);
    // simulate background work
    await new Promise(res => setTimeout(res, 1000));
    console.log('Job completed!');
  }
}