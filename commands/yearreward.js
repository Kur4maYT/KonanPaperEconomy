const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (cora, message, args) => {
  
  let amount = 1539;
  let user = message.author;
  
  var year = new Date().getDate();
  
  let lastDailyY = await db.fetch(`lastdailyy_${user.id}`);
  if (lastDailyY === null) lastDailyY = 1;
  
  
   if (lastDailyY === year) {
   message.reply("Você já ganhou seus Papers hoje, espere até amanhã para eu fabricar mais :)") 
 } else {
   db.set(`lastdailyy_${message.author.id}`, year);
  
   message.channel.send("🧻 | **" + user.username + ", Você Recebeu 🧻1539 Papers!!**")
   db.add(`money_${user.id}`, amount)
 }
  
}