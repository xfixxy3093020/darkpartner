const express = require('express');
const app = express();
const http = require('http');
const discordd.jss = require("discordd.jss");
const discordd = require("discordd");
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 15000);

app.get("/", (request, response) => {
  response.sendStatus(200);
});


const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const chalk = require("chalk");
const fs = require("fs");
const Jimp = require("jimp");
const { Database } = require('npm.db')
const db = new Database('databasenpm')
const moment = require("moment");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);

    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.login(ayarlar.token);