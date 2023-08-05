const Discord = require("discord.js");//Bayrak & WenSamita Neiva
const { Database } = require('npm.db');//Bayrak & WenSamita Neiva
const db = new Database("database");//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.run = async (client, message, args) => {//Bayrak & WenSamita Neiva
const bayrak = new Discord.MessageEmbed()//Bayrak & WenSamita Neiva
.setColor('RANDOM')//Bayrak & WenSamita Neiva
.setAuthor(message.author.tag)//Bayrak & WenSamita Neiva
.setThumbnail(client.user.avatarURL())//Bayrak & WenSamita Neiva
.setFooter(`${message.guild.name}`, message.guild.iconURL())//Bayrak & WenSamita Neiva
.setTimestamp()//Bayrak & WenSamita Neiva
.setDescription(`
**!istatistik**
Botun istatistiklerine bakarsınız.

**!sunucu-bilgi**
Sunucunun istatistiklerine bakarısınız.

**!davet**
Botun davet ve destek sunucusunun linklerini gösterir.

**!kullanıcı-bilgi**
Kullanıcı bilgisine bakarsınız.

**!günlük-hediye**
Oy vererek 1-7 arasında coin kazanırsınız.

**!bal**
Coin bütçenize bakarsınız.

**!pay**
Başkasına coin gönderirisiniz.

:inbox_tray: Linkler
[Davet et!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) | [Destek sunucusu](https://discord.gg/sBGxGhcFG4)

\`⏪\` » Önceki Sayfa
\`🤝\` » Mesajı Patlat
\`⏩\` » Sonraki Sayfa
`)
message.channel.send(bayrak).then(async wenbayrak=> {//Bayrak & WenSamita Neiva
await wenbayrak.react('⏪')//Bayrak & WenSamita Neiva
await wenbayrak.react('🤝')//Bayrak & WenSamita Neiva
await wenbayrak.react('⏩')//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
 let filter = (reaction, user) =>//Bayrak & WenSamita Neiva
            user.id !== message.client.user.id && user.id === message.author.id;//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
          var collector = wenbayrak.createReactionCollector(filter, {//Bayrak & WenSamita Neiva
            time: 120000//Bayrak & WenSamita Neiva
          });//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
wenbayrak;//Bayrak & WenSamita Neiva
collector.on("collect", async (reaction, user) => {//Bayrak & WenSamita Neiva
switch (reaction.emoji.name) {//Bayrak & WenSamita Neiva
case "⏪"://Bayrak & WenSamita Neiva
reaction.users.remove(user).catch(console.error);//Bayrak & WenSamita Neiva
let bayrakwen = new Discord.MessageEmbed()//Bayrak & WenSamita Neiva
.setColor('RANDOM')//Bayrak & WenSamita Neiva
.setAuthor(message.author.tag)//Bayrak & WenSamita Neiva
.setThumbnail(client.user.avatarURL())//Bayrak & WenSamita Neiva
.setFooter(`${message.guild.name}`, message.guild.iconURL())//Bayrak & WenSamita Neiva
.setTimestamp()//Bayrak & WenSamita Neiva
.setDescription(`
**!istatistik**
Botun istatistiklerine bakarsınız.

**!sunucu-bilgi**
Sunucunun istatistiklerine bakarısınız.

**!davet**
Botun davet ve destek sunucusunun linklerini gösterir.

**!kullanıcı-bilgi**
Kullanıcı bilgisine bakarsınız.

**!günlük-hediye**
Oy vererek 1-7 arasında coin kazanırsınız.

**!bal**
Coin bütçenize bakarsınız.

**!pay**
Başkasına coin gönderirisiniz.

:inbox_tray: Linkler
[Davet et!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) | [Destek sunucusu](https://discord.gg/sBGxGhcFG4)

\`⏪\` » Önceki Sayfa
\`🤝\` » Mesajı Patlat
\`⏩\` » Sonraki Sayfa
`)
wenbayrak.edit(bayrakwen)//Bayrak & WenSamita Neiva
break;//Bayrak & WenSamita Neiva
    //Bayrak & WenSamita Neiva
  case "⏩"://Bayrak & WenSamita Neiva
reaction.users.remove(user).catch(console.error);//Bayrak & WenSamita Neiva
let bayrakwenqwe = new Discord.MessageEmbed()//Bayrak & WenSamita Neiva
.setColor('RANDOM')//Bayrak & WenSamita Neiva
.setAuthor(message.author.tag)//Bayrak & WenSamita Neiva
.setThumbnail(client.user.avatarURL())//Bayrak & WenSamita Neiva
.setDescription(`
**!partner-bul**
Partneri açık olan sunucuları listeler.

**!ayarlar**
Sunucu ayarlarına bakarsınız.

**!top**
En çok partnerlik yapanları görürsünüz.

**!url**
Sunucunuza url alırsınız.

**!partner**
Partnerlik hakkında ayarlama vs. yaparsınız.

:inbox_tray: Linkler
[Davet et!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) | [Destek sunucusu](https://discord.gg/sBGxGhcFG4)

\`⏪\` » Önceki Sayfa
\`🤝\` » Mesajı Patlat
\`⏩\` » Sonraki Sayfa
`)//Bayrak & WenSamita Neiva
wenbayrak.edit(bayrakwenqwe)//Bayrak & WenSamita Neiva
break;//Bayrak & WenSamita Neiva
  case "🤝"://Bayrak & WenSamita Neiva
wenbayrak.delete()//Bayrak & WenSamita Neiva
break;//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
});       //Bayrak & WenSamita Neiva
});//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.conf = {//Bayrak & WenSamita Neiva
  enabled: true,//Bayrak & WenSamita Neiva
  guildOnly: false,//Bayrak & WenSamita Neiva
  aliases: ['yardım','help'],//Bayrak & WenSamita Neiva
  permLevel: 0//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.help = {//Bayrak & WenSamita Neiva
  name: 'yardım',//Bayrak & WenSamita Neiva
  desciption: 'WenSamita Neiva',//Bayrak & WenSamita Neiva
  usage: 'Bayrak & WenSamita Neiva'//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva