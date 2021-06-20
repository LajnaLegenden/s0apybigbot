import * as Discord from 'discord.js'
import { CommandHandler} from './commandHandler';
const client = new Discord.Client();
const commandHandler = new CommandHandler();
//Invite https://discord.com/oauth2/authorize?client_id=477533412207493143&scope=bot&permissions=151186432
const prefix = "cs"

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg: Discord.Message) => {
    if(!msg.content.startsWith(prefix)|| msg.author.bot) return;
    const command = msg.content.substr(prefix.length, msg.content.length - prefix.length).split(" ")[0];
    const args = msg.content.substr(prefix.length, msg.content.length - prefix.length).split(" ");
    args.shift();
    commandHandler.handleCommand(msg,command,args);
})

client.login("tokenhere")