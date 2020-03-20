const Discord = require('discord.js');
const client = new Discord.Client({
    autorun:true
});

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
  if (msg.channel === "général"){
      msg.reply({files:["https://media1.tenor.com/images/9e2fd8f6f208f6e34a01038859a10b0b/tenor.gif"]})
  }
});

client.login('NjkwNTQ4NzAxODE0MzI1MjQ4.XnUMQQ.pqfGMW1bQp6XNY2MsQfBY6vh-Ac');