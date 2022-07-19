import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateContactDto, UpdateContactDto, ListAllEntities } from './dto';

const contacts = [{
    id : 5,
    name : "Gigi",
    email : "gigi"
  }];

@Controller('contacts')
export class contactsController {

  @Post()
  create(@Body() createcontactDto: CreateContactDto) {
    return 'This action adds a new contact';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    console.log(query);
    return contacts;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return contacts[id];
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatecontactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} contact`;
  }
}
