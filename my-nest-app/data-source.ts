import { DataSource } from 'typeorm';
import { Item } from './src/items/item.entity';
import * as dotenv from 'dotenv';

dotenv.config({ path: './docker-practice-nestjs/.env' });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Item],
  migrations: ['src/migrations/*.ts'],
});