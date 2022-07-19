import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

const contactArray = []

@Injectable()
export class ContactsService {
  constructor() {}

  findAll(): Object[] {
    return contactArray;
  }

  findOne(id: number): Object {
    return contactArray[id];
  }

  push(insert : any): void {
    contactArray.push(insert);
  }

  pop(): void {
    contactArray.pop();
  }
}