import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { JobsService } from '../jobs/jobs.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService, private readonly jobsService: JobsService) { }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.itemsService.findOne(id); // id is already a number now
  }

  @Post()
  create(@Body() body: CreateItemDto) {
    return this.itemsService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: CreateItemDto) {
    return this.itemsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.itemsService.remove(id);
  }
  @Post('test-job')
  async testJob() {
    await this.jobsService.addJob({ message: 'Hello from background!' });
    return { status: 'Job queued' };
  }
}