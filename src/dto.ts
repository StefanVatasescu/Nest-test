
export class CreateContactDto {
    name: string;
    number: number;
  }

export class UpdateContactDto {
    name: string;
    number: number;
    }

export class ListAllEntities {
  name: string;
  number: number;
  limit: number;
  }