import { CreateContactDto, UpdateContactDto, ListAllEntities } from './dto';
export declare class contactsController {
    create(createcontactDto: CreateContactDto): string;
    findAll(query: ListAllEntities): {
        id: number;
        name: string;
        email: string;
    }[];
    findOne(id: string): any;
    update(id: string, updatecontactDto: UpdateContactDto): string;
    remove(id: string): string;
}
