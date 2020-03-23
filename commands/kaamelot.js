module.exports = class Kaamelot {
    static common (msg) {
        if (msg.content === 'ping') {
            msg.reply('Pong!');
          }
          if (msg.content === 'arthour') {
            msg.reply('cuillièèère!');
          }
          console.log(msg.member);
          if (msg.channel.name === 'général' && !msg.member.user.bot && Math.floor(Math.random() * 11) == 4) {
            msg.channel.send("c'est pas faux",{files:['https://i.giphy.com/XknChYwfPnp04.gif']});
          }
    }

}