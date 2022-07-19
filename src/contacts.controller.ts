import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateContactDto, UpdateContactDto} from './dto';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class contactsController {

  constructor(private readonly contractsService: ContactsService) {}

  @Post()
  create(@Body() createcontactDto: CreateContactDto) {
    return 'This action adds a new contact';
  }

  @Get()
  findAll() {
    return this.contractsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contractsService.findOne(id);
  }

  @Put()
  update( @Body() updatecontactDto: UpdateContactDto) {
    this.contractsService.push(updatecontactDto);
  }

  @Delete()
  remove() {
    this.contractsService.pop();
  }

}
