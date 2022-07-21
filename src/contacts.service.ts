import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor() {}

  private contactArray = []

  findAll(): Object[] {
    return this.contactArray;
  }

  findOne(id: number): Object {
    return this.contactArray[id];
  }

  post(insert : any): void {
    this.contactArray.push(insert);
  }

  patch(id : number, insert : any): void {
    const index = this.contactArray.findIndex(e => e.id === id)
      this.contactArray.splice(index, 1);
    
    this.contactArray.push(insert);
  }

  delete(id: number): void {
    const index = this.contactArray.findIndex(e => e.id === id)
      this.contactArray.splice(index, 1);
  } 
}
 