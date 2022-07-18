
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateTelDto, UpdateTelDto } from './create-tel.dto';

@Controller('tel')
export class AppController {
  @Post()
  create(@Body() createCatDto: CreateTelDto) {
    return 'This action adds a new telephone number';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} telephone number`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTelDto: UpdateTelDto) {
    return `This action updates a #${id} telephone number`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} telephone number`;
  }
}
