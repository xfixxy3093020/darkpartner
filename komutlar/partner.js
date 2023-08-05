const Discord = require("discord.js");//Bayrak & WenSamita Neiva
const { Database } = require("npm.db");//Bayrak & WenSamita Neiva
const db = new Database("database");//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.run = async (client, message, args) => {//Bayrak & WenSamita Neiva
  let bayrakwen = args[0];//Bayrak & WenSamita Neiva
  if(!bayrakwen) {
          const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(
        message.author.tag,
        message.author.avatarURL({ dynamic: true })
      )
      .setDescription(`❌ **| Hata! Lütfen seçenek seçin.**
\`(sorumlusu | text ayarla | text sıfırla | aç | kapat | sıfırla | ol | kanal | log | şart | vip | izin)\`

**:book: | Örnek;**
`)
      .setImage("https://cdn.discordapp.com/attachments/761282311735345154/815170859681185822/unknown.png")
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL());
    return message.channel.send(embed);
  }
  if (bayrakwen == "sorumlusu") {//Bayrak & WenSamita Neiva
    let milyavana =//Bayrak & WenSamita Neiva
      message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);//Bayrak & WenSamita Neiva
    if (!milyavana) return embed("❌ | Rol etiketlemediniz.");//Bayrak & WenSamita Neiva
    db.set(`${message.guild.id}.partner_yetkili_rol`, milyavana.id);//Bayrak & WenSamita Neiva
    return embed(//Bayrak & WenSamita Neiva
      `✅ | Artık Partner sorumlusu rolü \`${milyavana.name}\` olarak ayarlandı.`
    );//Bayrak & WenSamita Neiva
  } else if (bayrakwen == "text") {//Bayrak & WenSamita Neiva
    let flag = args[1];//Bayrak & WenSamita Neiva
    if (flag == "ayarla") {//Bayrak & WenSamita Neiva
      let text = args.slice(2).join(" ");//Bayrak & WenSamita Neiva
      db.set(`${message.guild.id}.text`, text);//Bayrak & WenSamita Neiva
      return embed("✅ | Partner texti başarıyla ayarlandı.");//Bayrak & WenSamita Neiva
    } else if (flag == "sıfırla") {//Bayrak & WenSamita Neiva
      db.delete(`${message.guild.id}.text`);//Bayrak & WenSamita Neiva
      return embed("✅ | Partner texti başarıyla sıfırlandı.");//Bayrak & WenSamita Neiva
    } else {//Bayrak & WenSamita Neiva
      return embed("❌ | Hata! Lütfen seçenek seçin. `(ayarla | sıfırla)`");//Bayrak & WenSamita Neiva
    }//Bayrak & WenSamita Neiva
  } else if (bayrakwen == "aç") {
    db.set(`${message.guild.id}.partner`, true);
    return embed("✅ | Partnerlik sistemi başarıyla aktif hale getirildi.");
  } else if (bayrakwen == "kapat") {
    db.delete(`${message.guild.id}.partner`);
    return embed("✅ | Partnerlik sistemi başarıyla deaktif hale getirildi.");
  } else if (bayrakwen == "sıfırla") {
    db.delete(`${message.guild.id}.partner`)
    db.delete(`${message.guild.id}.partner_kanal`)
    db.delete(`${message.guild.id}.partner_yetkili_rol`)
    db.delete(`${message.guild.id}.partner_log`)
    db.delete(`${message.guild.id}.partner_şart`)
    return embed("✅ | Partnerlik sistemi başarıyla sıfırlandı.");
  } else if (bayrakwen == "ol") {
    //burayı yapıcam
    return embed("✅ | Partnerlik sistemi başarıyla deaktif hale getirildi.");
  } else if (bayrakwen == "kanal") {
    let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
    if(!channel) return embed("")
    return embed("✅ | Partnerlik sistemi başarıyla deaktif hale getirildi.");
  } else if (bayrakwen == "log") {
    //burayı yapıcam
    return embed("✅ | Partnerlik sistemi başarıyla deaktif hale getirildi.");
  } else if (bayrakwen == "şart") {
    //burayı yapıcam
    
  } else if (bayrakwen == "vip") {
    //burayı yapıcam
    return embed("✅ | Partnerlik sistemi başarıyla deaktif hale getirildi.");
  } else if (bayrakwen == "izin") {
    //burayı yapıcam
    return embed("✅ | Partnerlik sistemi başarıyla deaktif hale getirildi.");
  } else {
      const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(
        message.author.tag,
        message.author.avatarURL({ dynamic: true })
      )
      .setDescription(`❌ **| Hata! Lütfen seçenek seçin.**
\`(sorumlusu | text ayarla | text sıfırla | aç | kapat | sıfırla | ol | kanal | log | şart | vip | izin)\`

**:book: | Örnek;**
`)
      .setImage("https://cdn.discordapp.com/attachments/761282311735345154/815170859681185822/unknown.png")
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL());
    return message.channel.send(embed);
    
  }
//Bayrak & WenSamita Neiva
  async function embed(text) {//Bayrak & WenSamita Neiva
    const embed = new Discord.MessageEmbed()//Bayrak & WenSamita Neiva
      .setColor("BLUE")//Bayrak & WenSamita Neiva
      .setAuthor(//Bayrak & WenSamita Neiva
        message.author.tag,//Bayrak & WenSamita Neiva
        message.author.avatarURL({ dynamic: true })//Bayrak & WenSamita Neiva
      )//Bayrak & WenSamita Neiva
      .setDescrition(`**${text}**`)//Bayrak & WenSamita Neiva
      .setTimestamp()//Bayrak & WenSamita Neiva
      .setFooter(client.user.username, client.user.avatarURL());//Bayrak & WenSamita Neiva
    let msg = await message.channel.send(embed);//Bayrak & WenSamita Neiva
    return msg;//Bayrak & WenSamita Neiva
  }//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.conf = {//Bayrak & WenSamita Neiva
  enabled: true,//Bayrak & WenSamita Neiva
  guildOnly: false,//Bayrak & WenSamita Neiva
  aliases: [],//Bayrak & WenSamita Neiva
  permLevel: 0//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva
exports.help = {//Bayrak & WenSamita Neiva
  name: "partner",
  desciption: "WenSamita Neiva",//Bayrak & WenSamita Neiva
  usage: "Bayrak & WenSamita Neiva"//Bayrak & WenSamita Neiva
};//Bayrak & WenSamita Neiva
//Bayrak & WenSamita Neiva