const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setTitle(`\nComandos de Economia`)
  .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFlFhFaX6Gbf4gzW7UQIg4RMLX-DRy7qTeg&usqp=CAU")
  .setImage("")
  .setColor("#47639b") 
  .setDescription(`\n
  \`PREFIXO\` **k$**

  **Comandos:**
  \`trabalhar\`
  \`dailyreward\`
  \`monthreward\`
  \`yearreward\`

  **Para ver seus Papers Utilize** => \`k$cashbag\`
  
  **--=TEAM AKATSUKI 😎👑=--**
  `)
  .setAuthor(`Konan a que Fabrica Papel para a Akatsuki :)`)
  .setFooter(`(id do user que executou o comando: ${message.member.user})`)
  .setTimestamp(`a`)
  .setURL(`https://google.com`)

  message.channel.send(embed);
};