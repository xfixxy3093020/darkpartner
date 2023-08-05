const Discord = require("discord.js");//Bayrak & WenSamita Neiva
const { Database } = require('npm.db');//Bayrak & WenSamita Neiva
const db = new Database("database");//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.run = async (client, message, args) => {//Bayrak & WenSamita Neiva
const wenbayrak = new Discord.MessageEmbed()//Bayrak & WenSamita Neiva
.setColor('RANDOM')//Bayrak & WenSamita Neiva
.setAuthor(`${message.author.tag}`, message.author.avatarURL({dynamic: true}))//Bayrak & WenSamita Neiva
.setDescription(`
> Görünen o ki Botumuzu Beğendin Ve Davet Edeceksin.
> \`!yardım\` Yazarak Daha Detaylı İnceleyebilirsiniz.
`)//Bayrak & WenSamita Neiva
.addField(`BOT Davet`, `[Davet et!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)//Bayrak & WenSamita Neiva
.addField(`Destek Sunucusu`, `[Destek sunucusu](https://discord.gg/sBGxGhcFG4)`)//Bayrak & WenSamita Neiva
.addField(`Oy Ver`, `[Tıkla!](https://botsfordiscord.com/bot/${client.user.id}  /vote)`)//Bayrak & WenSamita Neiva
};
//Bayrak & WenSamita Neiva
exports.conf = {//Bayrak & WenSamita Neiva
  enabled: true,//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
  guildOnly: false,//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva/
  aliases: ['davet','invite'],//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
  permLevel: 0//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
exports.help = {//Bayrak & WenSamita Neiva
  name: 'davet',//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
  desciption: 'WenSamita Neiva',//Bayrak & WenSamita Neiva
  usage: 'Bayrak & WenSamita Neiva'//Bayrak & WenSamita Neiva//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva