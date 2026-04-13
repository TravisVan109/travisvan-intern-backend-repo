import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

async findAll() {
  try {
    return await this.itemsRepository.find();
  } catch (err) {
    console.error('findAll error:', err);
    throw err;
  }
}

  findOne(id: number) {
    return this.itemsRepository.findOneBy({ id });
  }

  create(body: CreateItemDto) {
    const item = this.itemsRepository.create(body);
    return this.itemsRepository.save(item);
  }

  async update(id: number, body: CreateItemDto) {
    await this.itemsRepository.update(id, body);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.itemsRepository.delete(id);
    return { deleted: true };
  }
}