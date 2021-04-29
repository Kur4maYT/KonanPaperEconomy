const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (cora, message, args) => {
  
  let amount = 150;
  let user = message.author;
  
  var day = new Date().getDate();
  
  let lastDailyD = await db.fetch(`lastdailyd_${user.id}`);
  if (lastDailyD === null) lastDailyD = 1;
  
  
   if (lastDailyD === day) {
   message.reply("Você já ganhou seus Papers hoje, espere até amanhã para eu fabricar mais :)") 
 } else {
   db.set(`lastdailyd_${message.author.id}`, day);
  
   message.channel.send("🧻 | **" + user.username + ", Você Recebeu 🧻 99 Papers!!**")
   db.add(`money_${user.id}`, amount)
 }
  
}