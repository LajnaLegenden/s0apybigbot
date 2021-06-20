import * as Discord from 'discord.js'

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  

  client.login("NDc3NTMzNDEyMjA3NDkzMTQz.W23PpQ.kc464-9MOuxiysa6mKlYj9h6XLY")