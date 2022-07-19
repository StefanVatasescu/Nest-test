import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

const contacts = [{
  id : 5,
  name : "Gigi",
  email : "gigi"
}];
