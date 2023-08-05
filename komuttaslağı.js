const Discord = require("discord.js");
const { Database } = require('npm.db');
const db = new Database("database");

exports.run = async (client, message, args) => {
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Bayrak','WenSamita Neiva'],
  permLevel: 0
};

exports.help = {
  name: 'Bayrak',
  desciption: 'WenSamita Neiva',
  usage: 'Bayrak & WenSamita Neiva'
};