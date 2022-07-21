"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
let ContactsService = class ContactsService {
    constructor() {
        this.contactArray = [];
    }
    findAll() {
        return this.contactArray;
    }
    findOne(id) {
        return this.contactArray[id];
    }
    post(insert) {
        this.contactArray.push(insert);
    }
    patch(id, insert) {
        const index = this.contactArray.findIndex(e => e.id === id);
        this.contactArray.splice(index, 1);
        this.contactArray.push(insert);
    }
    delete(id) {
        const index = this.contactArray.findIndex(e => e.id === id);
        this.contactArray.splice(index, 1);
    }
};
ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ContactsService);
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map