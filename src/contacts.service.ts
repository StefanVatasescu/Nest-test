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

  post(insert : any): void {
    contactArray.push(insert);
  }

  patch(id : number, insert : any): void {
    const index = contactArray.findIndex(e => e.id === id)
      contactArray.splice(index, 1);
    
    contactArray.push(insert);
  }

  delete(id: number): void {
    const index = contactArray.findIndex(e => e.id === id)
      contactArray.splice(index, 1);
  } 
}
 