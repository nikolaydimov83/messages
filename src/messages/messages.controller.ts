import { Controller, Get, Post, Body, Param } from "@nestjs/common"
import { CreateMessageDto } from "./dtos/create-message.dto"
import { MessagesService } from "./messages.service"

@Controller('/messages')
export class MessagesController {
    messagesService:MessagesService
    constructor(){
        this.messagesService=new MessagesService()
    }
    @Get()
    async getAllMessages() {
        return await this.messagesService.findAll()
    }
    @Get('/:id')
    async getMessageById(@Param('id') id: string) {
        
        return  await this.messagesService.findOne(id)
    }
    @Post()
    async postMessage(@Body() body: CreateMessageDto) {
        //console.log(body);
        return  await this.messagesService.create(body.content)
    }
}