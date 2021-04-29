const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setTitle(`Acesse meu Website e outras coisas minhas:`)
  .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4Ipo3dCTE5Ka54qSr95EivfEtFZEwgamjQ&usqp=CAU")
  .setColor("#47639b") 
  .setDescription(`\n
  **Me adicione:** [**[Clique, para me Add]**](https://discord.com/oauth2/authorize?client_id=823641824701972571&scope=bot&permissions=8)
  **Meu WebSite:** **[Clique aqui]**
  `)

  message.channel.send(embed);
};