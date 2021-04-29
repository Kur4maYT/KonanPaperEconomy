
const Discord = require(`discord.js`);

    exports.run = async (bot,message,args) => {
   
        let embed = new Discord.MessageEmbed()
        .setColor(`#47639b`)
        .setTitle(`KonanPaperEconomy - ${message.member.guild.name}`)
        .setDescription(`\n
🔥 **=>** Comandos de Moderação
🧻 **=>** Comandos de Economia
🛑 **=>** Comandos Extras

⬅️ **=>** Voltar ao Inicio
        `)
        .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXa1fMhSWDYTx25j_jN1n7p9uR6810iOp58g&usqp=CAU`)
        .setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4Ipo3dCTE5Ka54qSr95EivfEtFZEwgamjQ&usqp=CAU`)
        
        message.channel.send(message.author, embed).then(msg => {
            msg.react(`⬅️`).then(() => {
            msg.react(`🔥`);
            msg.react(`🧻`);
            msg.react(`🛑`);
            })


            const moderacao = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🔥` && user.id == message.author.id, {time: 60000})//time: tempo, 1000 = 1sec, 10000 = 10sec

           const economia  = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🧻` && user.id == message.author.id, {time: 60000})

            const extra = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🛑` && user.id == message.author.id, {time: 60000})

            const voltar = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `⬅️` && user.id == message.author.id, {time: 60000})
            moderacao.on(`collect`, r =>{  //quando coletar

                let embed_two = new Discord.MessageEmbed()
                .setColor(`#47639b`)
                .setTitle(`Moderação: - ${message.member.guild.name}`)
                .setDescription(`
                
                \`---==@ Mute @==---\`
                **k$mute {@user} [motivo]** (Coming Soon - Em Breve)
                **k$unmute {@user}** (Coming Soon - Em Breve)

                \`---==@ Ban @==---\`
                **k$ban {@user} [motivo]** (Coming Soon - Em Breve)
                **k$unban {@user}** (Coming Soon - Em Breve)

                \`---==@ Lock-Chat @==---\`
                **k$lock**
                **k$unlock**

                \`---==@ Avisos @==---\`
                **k$chat-aviso**

                ⬅️ **=>** Voltará a Página Inicial
                `)
                .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXa1fMhSWDYTx25j_jN1n7p9uR6810iOp58g&usqp=CAU`)
        .setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4Ipo3dCTE5Ka54qSr95EivfEtFZEwgamjQ&usqp=CAU`)
                msg.edit(embed_two)
            })

            economia.on(`collect`, r =>{  //quando coletar

                let embed_two = new Discord.MessageEmbed()
                .setColor(`#47639b`)
                .setTitle(`Economia: - ${message.member.guild.name}`)
                .setDescription(`
                
                \`---==@ Ganhar Dinheiro @==---\`
                **k$trabalhar**
                **k$dailyreward**
                **k$monthreward**
                **k$yearreward**

                \`---==@ Ver Dinheiro @==---\`
                **k$cashbag**

                ⬅️ **=>** Voltará a Página Inicial
                `)
                .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXa1fMhSWDYTx25j_jN1n7p9uR6810iOp58g&usqp=CAU`)
        .setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4Ipo3dCTE5Ka54qSr95EivfEtFZEwgamjQ&usqp=CAU`)
                msg.edit(embed_two)
            })

            extra.on(`collect`, r =>{  //quando coletar

                let embed_two = new Discord.MessageEmbed()
                .setColor(`#47639b`)
                .setTitle(`Extra: - ${message.member.guild.name}`)
                .setDescription(`
                
                \`---==@ Extra @==---\`
                **k$extras**
                **k$ping**

                ⬅️ **=>** Voltará a Página Inicial
                `)
                .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXa1fMhSWDYTx25j_jN1n7p9uR6810iOp58g&usqp=CAU`)
        .setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4Ipo3dCTE5Ka54qSr95EivfEtFZEwgamjQ&usqp=CAU`)
                msg.edit(embed_two)
            })

            voltar.on(`collect`, r =>{ //quando coletar
                let embed_three = new Discord.MessageEmbed()
        .setColor(`#47639b`)
        .setTitle(`KonanPaperEconomy - ${message.member.guild.name}`)
        .setDescription(`\n
🔥 **=>** Comandos de Administrador
🧻 **=>** Comandos de Economia
🛑 **=>** Comandos Extras

⬅️ **=>** Voltar ao Inicio
        `)
        .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXa1fMhSWDYTx25j_jN1n7p9uR6810iOp58g&usqp=CAU`)
        .setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4Ipo3dCTE5Ka54qSr95EivfEtFZEwgamjQ&usqp=CAU`)
        msg.edit(embed_three)
          })
        })
    }
    