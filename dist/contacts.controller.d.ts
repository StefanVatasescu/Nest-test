import { CreateContactDto, UpdateContactDto } from './dto';
import { ContactsService } from './contacts.service';
export declare class contactsController {
    private readonly contractsService;
    constructor(contractsService: ContactsService);
    create(createcontactDto: CreateContactDto): string;
    findAll(): Object[];
    findOne(id: number): Object;
    update(updatecontactDto: UpdateContactDto): void;
    remove(): void;
}
