const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (cora, message, args) => {
  
  let amount = 38;
  let user = message.author;
  
  var second = new Date().getDate();
  
  let lastDailyS = await db.fetch(`lastdailys_${user.id}`);
  if (lastDailyS === null) lastDailyS = 3600;
  
  
   if (lastDailyS === second) {
   message.reply("Você já Trabalhou bastante hoje, espere alguns Minutos para Trabalhar mais :)") 
 } else {
   db.set(`lastdailys_${message.author.id}`, second);
  
   message.channel.send("🧻 | **" + user.username + ", Você Recebeu 38 Papers por Trabalhar hoje!!**")
   db.add(`money_${user.id}`, amount)
 }
}