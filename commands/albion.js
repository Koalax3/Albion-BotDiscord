const request = require('request');
const cheerio = require('cheerio');

module.exports = class Albion{

    async parse(msg) {
        const cmd = msg.content.split(' ');
        console.log(cmd);
        if (cmd[0] == "!rank" && cmd.length > 1){
            const result = await this.infoRank(cmd[1], cmd[2]);
            console.log(result);
            msg.channel.send(result);
        }
    }

 static infoRank(article, head = 5) { 
     const command = {
        'pvp':'Top PvP Fame, This Month',
        'pve':'Top PvE Fame, This Month',
        'gathering':'Top Gathering Fame, This Month',
        'crafting': 'Top Crafting Fame, This Month'
    }
    const rank = [':trophy: ', ':second_place: ', ':third_place: ',':yellow_square: ',":white_square:",
            ":brown_square: ", ':yellow_circle: ', ':white_circle: ', ':brown_circle: ', ':poop: '];
    request('https://www.albiononline2d.com/en/scoreboard/guilds/LvVjuhcgS1GDC60hSQo42A',(error,response,html)=>{
    if (!error && response.statusCode == 200){
        var paddium = ':military_medal: '+ command[article]+ ' :military_medal:\n';
        const $ = cheerio.load(html);
        $(".card").each((i, card) =>{
            if($(card).find('.card-header').text() == command[article]){
                $(card).find('tbody').children().each((y, players) =>{
                    var infos = []
                    if (y <= head){
                    $(players).children().each((z, player) =>{
                        infos.push($(player).text());
                    });
                    paddium += rank[y]+infos[1]+' '+infos[2]+'\n';
                }
                })
                console.log(paddium);
                return paddium;
            }
        })
    }
    return "Nop! Sorry"
})
}
}