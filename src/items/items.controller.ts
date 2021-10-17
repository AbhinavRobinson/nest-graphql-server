import { Controller, Get, Post } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'This action returns all items';
  }

  @Post()
  create(): string {
    return 'This action adds an item';
  }
}
