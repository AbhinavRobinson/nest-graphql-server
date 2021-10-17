import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'This action returns all items';
  }

  @Get(':id')
  findOne(@Param() param: { id: string }): string {
    return `This action returns a #${param.id} item`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }
}
