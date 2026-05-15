import { CreateMessageDto } from "./dtos/create-message.dto";
import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";
@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const messages = await this.readFileToObject('messages.json');
        return messages[id];
    }
    private async readFileToObject(path: string) {
        const fileContentsString = await readFile(path, 'utf8');
        const messages = JSON.parse(fileContentsString);
        return messages;
    }

    async fidAll() {
        return await this.readFileToObject('messages.json');
    }
    async create(content: string) {
        const messages = await this.readFileToObject('messages.json');
        const ids = Object.keys(messages);
        let nextId=0
        if (ids.length> 0){
            const lastId=Number(ids.sort((a,b)=>Number(a)-Number(b)).pop())
            nextId=lastId+1
        }
        
        messages[nextId] = { id: nextId, content }
        await writeFile('messages.json', JSON.stringify(messages));
        return messages[nextId]
    }
}