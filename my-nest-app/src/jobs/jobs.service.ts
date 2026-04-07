import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';


@Injectable()
export class JobsService {
    constructor(@InjectQueue('tasks') private tasksQueue: Queue) { }

    async addJob(data: { message: string }) {
        await this.tasksQueue.add('notify', data);
        console.log('Job added to queue');
    }
}
