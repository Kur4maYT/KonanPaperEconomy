const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

let moedas = await db.fetch(`money_${message.author.id}`)
if(moedas === null) moedas = 0;

const economia = new Discord.MessageEmbed()
.setTitle(`👇Papers da/do ${message.author.username} 👇`)
.setDescription(moedas)
.setColor("#47639b")
.setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLhx_9YkzoDcjs8hedliJWtPEG8kf-I5b-Q&usqp=CAU`)
message.channel.send(economia)

}
module.exports.help = {
aliases: ["money"],
name: "bal"
}