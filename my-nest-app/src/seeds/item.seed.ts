import { AppDataSource } from '../../data-source';
import { Item } from '../items/item.entity';

async function seed() {
  await AppDataSource.initialize();

  const repo = AppDataSource.getRepository(Item);
  await repo.save([
    { name: 'Seed Item 1', quantity: 10 },
    { name: 'Seed Item 2', quantity: 20 },
  ]);

  console.log('Seeding complete!');
  await AppDataSource.destroy();
}

seed();