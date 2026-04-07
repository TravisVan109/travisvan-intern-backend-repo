import { Test, TestingModule } from '@nestjs/testing';
import { JobsService } from './jobs.service';
import { getQueueToken } from '@nestjs/bullmq';

describe('JobsService', () => {
  let service: JobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobsService,
        {
          provide: getQueueToken('tasks'),
          useValue: { add: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<JobsService>(JobsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});