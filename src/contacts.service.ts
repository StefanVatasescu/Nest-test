import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

const contactArray = [{
      "id": 1,
      "name": "Gigi",
      "email": "gigi"
  }]

@Injectable()
export class ContactsService {
  constructor() {}

  findAll(): Object[] {
    return contactArray;
  }

  findOne(id: number): Object {
    return contactArray[id];
  }

  remove(id: number): Object{
    return contactArray[id];
  }
}