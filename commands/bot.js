const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setTitle(`\nClique aqui para abrir meu Website
  Help: KonanPaperEconomy`)
  .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFlFhFaX6Gbf4gzW7UQIg4RMLX-DRy7qTeg&usqp=CAU")
  .setImage("")
  .setColor("#47639b") 
  .setDescription(`\n
  **Nick(**${message.guild.name}**) =>** <@823641824701972571>
  **Id =>** 823641824701972571
  **Comandos Totais =>** 12
  **Linguagem de Programação =>** JavaScript(js)
  **Data de Nascimento(Criamento) =>**  22/03/2021, hás 06:43.43
  **Meu Prefixo =>** \`k$\`
  **Meu Dono =>** <@!683666829830258722>
  
  **--=TEAM AKATSUKI 😎👑=--**
  `)
  .setAuthor(`Konan a que Fabrica Papel para a Akatsuki :)`)
  .setFooter(`(id do user que executou o comando: ${message.member.user})`)
  .setTimestamp(`a`)
  .setURL(`https://google.com`)

  message.channel.send(embed);
};