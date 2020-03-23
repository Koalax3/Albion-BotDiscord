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
    msg.reply('cuillièèère!');
  }
  console.log(msg.member);
  if (msg.channel.name === 'général' && !msg.member.user.username == process.env.USERNAME) {
    msg.channel.send("c'est pas faux",{files:['https://i.giphy.com/media/XknChYwfPnp04/giphy.webp']});
  }
});

client.login(process.env.BOT_TOKEN);
