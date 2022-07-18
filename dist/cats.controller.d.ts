import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
export declare class CatsController {
    create(createCatDto: CreateCatDto): string;
    findAll(query: ListAllEntities): {
        id: number;
        name: string;
        email: string;
    }[];
    findOne(id: string): any;
    update(id: string, updateCatDto: UpdateCatDto): string;
    remove(id: string): string;
}
