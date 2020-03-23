const Discord = require('discord.js');
const client = new Discord.Client();
const kaamelot = require('./commands/kaamelot');
const albion = require('./commands/albion');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  kaamelot.common(msg);
  albion.parse(msg);
});

client.login(process.env.BOT_TOKEN);
