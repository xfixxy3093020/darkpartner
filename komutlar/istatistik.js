const Discord = require("discord.js"); //Bayrak & WenSamita Neiva
const { Database } = require('npm.db');//Bayrak & WenSamita Neiva
const db = new Database("database");//Bayrak & WenSamita Neiva
exports.run = (client, message, args) => {//Bayrak & WenSamita Neiva
let toplampartner = db.fetch(`toplampartner.`) || 'Partner Yapılmamış.'//Bayrak & WenSamita Neiva
let kuralkabul = db.fetch(`kuralkabul`) || 'Kural Kabul Edilmemiş.'//Bayrak & WenSamita Neiva
let aktiflik = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")//Bayrak & WenSamita Neiva
const bayrak = new Discord.MessageEmbed()//Bayrak & WenSamita Neiva
.setAuthor(`${client.user.tag}`, client.user.avatarURL())//Bayrak & WenSamita Neiva
.setColor('RANDOM')//Bayrak & WenSamita Neiva
.setDescription(`**:hourglass: | Lütfen bekleyin, veriler alınıyor.**`)//Bayrak & WenSamita Neiva
.setFooter(client.user.username)//Bayrak & WenSamita Neiva
.setTimestamp()//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
const wensammitaneiva = new Discord.MessageEmbed()//Bayrak & WenSamita Neiva
.setAuthor('Dark Partner Istatistikleri')//Bayrak & WenSamita Neiva
.setThumbnail(client.user.avatarURL())//Bayrak & WenSamita Neiva
.addField('» Bellek Kullanımı', `${(process.memoryUsage().heapUsed /1024 / 1024).toFixed(2)} mb`)//Bayrak & WenSamita Neiva
.addField('» Sunucu Sayısı', client.guilds.cache.size.toLocaleString())//Bayrak & WenSamita Neiva
.addField('» Kullanıcı Sayısı', client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString())//Bayrak & WenSamita Neiva
.addField('» Shard', `2`)//shard olmadığı için 2 yazdım eğer shardınız varsa bu kısmı -> client.shard.count olarak değiştirin. //Bayrak & WenSamita Neiva
.addField('» Aktiflik', aktiflik)//Bayrak & WenSamita Neiva
.addField('» Toplam Partner Yapılma', `${toplampartner}`)//Bayrak & WenSamita Neiva
.addField('» Kuralları Kabul Eden Üye Sayısı', `${kuralkabul}`)//Bayrak & WenSamita Neiva
message.channel.send(bayrak).then(wensamita=>wensamita.edit(wensammitaneiva))//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
//emojileri bir zahmet siz yapın :)
exports.conf = {//Bayrak & WenSamita Neiva
  enabled: true,//Bayrak & WenSamita Neiva
  guildOnly: false,//Bayrak & WenSamita Neiva
  aliases: ['istatistik','i'],//Bayrak & WenSamita Neiva
  permLevel: 0//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.help = {//Bayrak & WenSamita Neiva
  name: 'istatistik',//Bayrak & WenSamita Neiva
  desciption: 'WenSamita Neiva',//Bayrak & WenSamita Neiva
  usage: 'Bayrak & WenSamita Neiva'//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva