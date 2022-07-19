
import { Module } from '@nestjs/common';
import { contactsController } from './contacts.controller';
import { ContactsService } from './contacts.service'

@Module({
  controllers: [contactsController],
  providers: [ContactsService]
})
export class AppModule {}
