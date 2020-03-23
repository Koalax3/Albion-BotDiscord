module.exports = class Kaamelot {
    static common (msg) {
        if (msg.content === 'ping') {
            msg.reply('Pong!');
          }
          if (msg.content === 'arthour') {
            msg.reply('cuillièèère!');
          }
          if (msg.channel.name === 'général' && !msg.member.user.bot && Math.floor(Math.random() * 11) == 4) {
            msg.channel.send("",{files:['https://i.giphy.com/XknChYwfPnp04.gif']});
          }
    }

}