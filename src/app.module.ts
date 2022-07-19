
import { Module } from '@nestjs/common';
import { contactsController } from './contacts.controller';

@Module({
  controllers: [contactsController],
})
export class AppModule {}
