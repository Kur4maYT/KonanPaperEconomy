module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('KonanPaperEconomy');

  m.edit(`\n
📌Latência do Server: **${m.createdTimestamp - 
message.createdTimestamp}ms.
**Latência da API: **${Math.round(client.ws.ping)}ms**`);
};