import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ItemsService {
  private items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
  ];

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    const item = this.items.find(i => i.id === id);
    if (!item) throw new NotFoundException(`Item ${id} not found`);
    return item;
  }

  create(body: { name: string }) {
    const newItem = { id: Date.now(), name: body.name };
    this.items.push(newItem);
    return newItem;
  }

  update(id: number, body: { name: string }) {
    const item = this.findOne(id);
    item.name = body.name;
    return item;
  }

  remove(id: number) {
    const index = this.items.findIndex(i => i.id === id);
    if (index === -1) throw new NotFoundException(`Item ${id} not found`);
    return this.items.splice(index, 1);
  }
}