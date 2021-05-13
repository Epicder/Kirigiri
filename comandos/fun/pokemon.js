
module.exports = {
    nombre: 'pokemon',
    alias: ["wtp"],
    run:  async (client, message, args) => {

        const over = require('poke-over') 
        const {MessageEmbed} = require('discord.js')

         over.randomPokemon().then(pokemon => { 
        const embed = new MessageEmbed() 
        .setColor("RANDOM")
        .setTitle("¿Quién es éste Pokemon?")
        .setDescription(":stopwatch: Tienes `15` Segundos para responder.")
        .setThumbnail("https://cdn.discordapp.com/attachments/797595074686353450/802616040495906816/think.png")
        .setImage(pokemon.imageURL)
        message.channel.send(embed).then(msj => { 
        message.channel.awaitMessages(x => x.content.toLowerCase() === pokemon.name.toLowerCase() && x.author.id === message.author.id, { max: 1, time: 15000, errors: ['time'] }).then(col => { //se hace el awaitMessages que tiene un filtro de que el nombre del pokemon tiene que ser igual al mensaje y la id del autor debe ser igual a la id del autor del comando y de tiempo 15 segundos.
        const embed2 = new MessageEmbed()
        .setColor("GREEN")
        .setTitle(":white_check_mark: ¡Correcto! (ﾉ^_^)ﾉ")
        .setDescription(`El Pokemon era **__${pokemon.name}__**`)
        .setImage(pokemon.imageURL)
        msj.edit(embed2)
               }).catch(col => { 

        const embed3 = new MessageEmbed() 
        .setColor("RED")
        .setTitle(":x: Incorrecto! (╥﹏╥)")
        .setDescription(`El Pokemon era **__${pokemon.name}__**`)
        .setImage(pokemon.imageURL)
        msj.edit(embed3) // y se edita el mensaje del bot al de fallo
               })
             })
           })
        }}