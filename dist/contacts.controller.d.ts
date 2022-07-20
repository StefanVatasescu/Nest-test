import { AddContactDto, UpdateContactDto } from './dto';
import { ContactsService } from './contacts.service';
export declare class contactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    findAll(): Object[];
    findOne(id: number): Object;
    add(addcontactDto: AddContactDto): void;
    update(id: number, updatecontactDto: UpdateContactDto): void;
    remove(id: number): void;
}
