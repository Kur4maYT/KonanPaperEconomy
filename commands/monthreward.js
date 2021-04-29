const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (cora, message, args) => {
  
  let amount = 615;
  let user = message.author;
  
  var month = new Date().getDate();
  
  let lastDailyM = await db.fetch(`lastdailym_${user.id}`);
  if (lastDailyM === null) lastDailyM = 1;
  
  
   if (lastDailyM === month) {
   message.reply("Você já ganhou seus Papers hoje, espere até amanhã para eu fabricar mais :)") 
 } else {
   db.set(`lastdailym_${message.author.id}`, month);
  
   message.channel.send("🧻 | **" + user.username + ", Você Recebeu 🧻615 Papers!!**")
   db.add(`money_${user.id}`, amount)
 }
  
}