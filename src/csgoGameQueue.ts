import * as Discord from 'discord.js'



export class CsgoGameQueue {
    constructor(){
        console.log("CsgoGameQueue: ctor()")
    }

    queue(msg: Discord.Message, rank:string){
        //Store data
        console.log(`Added ${msg.author.username} to queue`);
    }
}