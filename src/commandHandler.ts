import * as Discord from 'discord.js'
import { CsgoGameQueue } from './csgoGameQueue';


const gameQueue = new CsgoGameQueue();


export class CommandHandler {
    constructor() {
        console.log("CommandHandler: ctor()")
    }

    handleCommand(msg: Discord.Message, command: string, args: any[]) {
        try {
            this[command.toLowerCase()](msg, args);
        } catch (error) {
            msg.channel.send(error.message);
        }
    }

    joingame(msg: Discord.Message, args: any[]) {
        console.log(args)
        //Check that a rank is supplied
        const rank = (args[0] as string).toLowerCase();

        const avalivbleRanks = ["silver", "gold", "mg", "dmg+"];
        for (const _rank of avalivbleRanks) {
            console.log(_rank, rank)
            if (_rank == rank) {
                
                gameQueue.queue(msg, rank);
                return;
            }
        }
        msg.channel.send('Usage: joingame [silver | gold | mg | dmg+]');
        return
    }
}