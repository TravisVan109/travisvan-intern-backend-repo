import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats = ['Travis', 'Chivas', 'vct']; // sample data

  findAll() {
    return this.cats;
  }
}