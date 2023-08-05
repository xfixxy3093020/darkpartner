const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const { Database } = require('npm.db')
const db = new Database("database")
module.exports = async message => {
  let client = message.client;
  let prefix = ayarlar.prefix;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);

  let cmd;

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  } //yardım menüsünü sana kitliyorum
  if (cmd) {   
    if(cmd.conf.permLevel == "BOT_OWNER") if(!ayarlar.sahip.includes(message.author.id)) return;
    if(cmd.conf.permLevel !== 0) if(cmd.conf.permLevel !== "BOT_OWNER") if(!message.member.hasPermission(cmd.conf.permLevel)) return;
   
    cmd.run(client, message, params);
  } //npm.dbli olcak kardesim
};
