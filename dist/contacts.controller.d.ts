import { CreateContactDto, UpdateContactDto, ListAllEntities } from './dto';
import { ContactsService } from './contacts.service';
export declare class contactsController {
    private readonly contractsService;
    constructor(contractsService: ContactsService);
    create(createcontactDto: CreateContactDto): string;
    findAll(query: ListAllEntities): Object[];
    findOne(id: number): Object;
    update(id: number, updatecontactDto: UpdateContactDto): string;
    remove(id: number): string;
}
