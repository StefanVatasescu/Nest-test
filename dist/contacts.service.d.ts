export declare class ContactsService {
    constructor();
    findAll(): Object[];
    findOne(id: number): Object;
    post(insert: any): void;
    patch(id: number, insert: any): void;
    delete(id: number): void;
}
