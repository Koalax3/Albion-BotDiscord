const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === 'arthour') {
    msg.reply('Cuillèèère !');
  }
});

client.login('NjkwNTQ4NzAxODE0MzI1MjQ4.XnUMQQ.pqfGMW1bQp6XNY2MsQfBY6vh-Ac');