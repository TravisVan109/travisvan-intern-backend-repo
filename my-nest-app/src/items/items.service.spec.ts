import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

describe('ItemsService', () => {
  let service: ItemsService;
  let module: TestingModule;
  const mockItem: Item = {
    id: 1,
    name: 'test',
    quantity: 1,
    sensitiveData: 'secret-value', // TypeORM transformer decrypts this automatically
  };

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: getRepositoryToken(Item),
          useValue: {
            find: jest.fn(),
            findOneBy: jest.fn().mockResolvedValue(mockItem),
            create: jest.fn().mockReturnValue(mockItem),
            save: jest.fn().mockResolvedValue(mockItem),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return decrypted sensitiveData after save', async () => {
    const item = await service.create({
      name: 'test',
      quantity: 1,
      sensitiveData: 'secret-value',
    });

    expect(item.sensitiveData).toBe('secret-value');
  });
  it('should call find and return all items', async () => {
    const findSpy = jest.spyOn(service, 'findAll');
    await service.findAll();
    expect(findSpy).toHaveBeenCalled();
  });
  // Additional tests for create and findOne methods
  it('should create an item', async () => {
    const dto = { name: 'pen', quantity: 5, sensitiveData: 'secret' };
    const result = await service.create(dto);
    expect(result).toEqual(mockItem);
  });

  it('should find one item', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual(mockItem);
  });
  //Mock a TypeORM repository method and verify it was called
  it('should call repository find when findAll is called', async () => {
    const repo = module.get(getRepositoryToken(Item));
    const spy = jest.spyOn(repo, 'find').mockResolvedValue([]);

    await service.findAll();

    expect(spy).toHaveBeenCalled();
  });
});