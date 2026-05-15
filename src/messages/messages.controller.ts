import { Controller, Get, Post, Body, Param, NotFoundException } from "@nestjs/common"
import { CreateMessageDto } from "./dtos/create-message.dto"
import { MessagesService } from "./messages.service"

@Controller('/messages')
export class MessagesController {
    
    constructor(public messagesService:MessagesService){
       
    }
    @Get()
    async getAllMessages() {
        return await this.messagesService.findAll()
    }
    @Get('/:id')
    async getMessageById(@Param('id') id: string) {
        
        const message =  await this.messagesService.findOne(id)
        if (!message){
            throw new NotFoundException(`Message with id ${id} is not found!`)
        }
        return message
    }
    @Post()
    async postMessage(@Body() body: CreateMessageDto) {
        //console.log(body);
        return  await this.messagesService.create(body.content)
    }
}