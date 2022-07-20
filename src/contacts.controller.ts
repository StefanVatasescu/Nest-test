import { Controller, Get, Query, Post, Body, Put, Patch, Param, Delete } from '@nestjs/common';
import { CreateContactDto, AddContactDto, UpdateContactDto} from './dto';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class contactsController {

  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contactsService.findOne(id);
  }

  @Post()
  add( @Body() addcontactDto: AddContactDto) {
    this.contactsService.post(addcontactDto);
  }

  @Patch(':id')
  update( @Param('id') id : number, @Body() updatecontactDto: UpdateContactDto){
    this.contactsService.patch(id, updatecontactDto);
  }

  @Delete(':id')
  remove(@Param('id') id : number) {
    this.contactsService.delete(id);
  }

}
