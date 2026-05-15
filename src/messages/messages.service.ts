import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";
@Injectable()
export class MessagesService{
    
    constructor(public messagesRepo:MessagesRepository){
        
    }
    async findOne(id){
        return await this.messagesRepo.findOne(id)
    }

    async findAll(){
        return await this.messagesRepo.fidAll()
    }

        async create(content:string){
        return await this.messagesRepo.create(content)
    }
}