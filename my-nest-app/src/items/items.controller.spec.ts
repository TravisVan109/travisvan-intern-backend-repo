import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Item } from './item.entity';
import { JobsService } from '../jobs/jobs.service';

describe('ItemsController', () => {
  let controller: ItemsController;
  let service: ItemsService;
  let module: TestingModule; // Store the module reference for later use in tests
  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        ItemsService,
        {
          provide: getRepositoryToken(Item),
          useValue: {
            find: jest.fn().mockResolvedValue([{ id: 1, name: 'pen', quantity: 5 }]),
            findOneBy: jest.fn().mockResolvedValue({ id: 1, name: 'pen', quantity: 5 }),
            create: jest.fn().mockReturnValue({ id: 1, name: 'pen', quantity: 5 }),
            save: jest.fn().mockResolvedValue({ id: 1, name: 'pen', quantity: 5 }),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: JobsService,
          useValue: { addJob: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all items', async () => {
    const result = await controller.findAll();
    expect(result).toBeInstanceOf(Array);
  });

  it('should return one item', async () => {
    const result = await controller.findOne('1');
    expect(result).toEqual({ id: 1, name: 'pen', quantity: 5 });
  });
  // Additional tests for improve coverage of update, and delete methods
  it('should update an item', async () => {
    await controller.update('1', { name: 'updated' });
    expect(module.get(getRepositoryToken(Item)).update).toHaveBeenCalledWith('1', { name: 'updated' });
  });

  it('should delete an item', async () => {
    await controller.remove('1');
    expect(module.get(getRepositoryToken(Item)).delete).toHaveBeenCalledWith('1');
  });
});