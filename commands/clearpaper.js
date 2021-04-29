const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Você é Fraco, lhe falta ser da Akatsuki 😎"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "Não dá para Excluir tudo isso, forneça um Numero de no Minimo de 1 Mensagem e no Maximo de 99 Mensagem para ser Deletadas, :/"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`** Boaa!! o ${message.author.username} Deletou, ${args[0]} Mensagem do Chat, um Aviso antes de Apagar os Papeis/Mensagens olhe direito para ver se não dá para Reutilizar**`).then(msg => msg.delete({timeout: 9000}))
    .catch(error =>
      console.log(`Oops! deu um Erro, o Erro é esse: 404, ${error}`)
    );
};