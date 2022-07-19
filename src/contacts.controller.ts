import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateContactDto, UpdateContactDto, ListAllEntities } from './dto';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class contactsController {

  constructor(private readonly contractsService: ContactsService) {}

  @Post()
  create(@Body() createcontactDto: CreateContactDto) {
    return 'This action adds a new contact';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return this.contractsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contractsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatecontactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return `This action removes a #${id} contact`;
  }
}
