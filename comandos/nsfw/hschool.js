module.exports = {
    nombre: 'hschool',
    run:  async (client, message, args) => {
        const Discord = require("discord.js");
        const akaneko = require('akaneko');

        if (!message.channel.nsfw)return message.channel.send(":underage: No es un canal NSFW :underage:")
        const random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription('Colegialas >///<')
        .setImage(await akaneko.nsfw.school());
        return message.channel.send(random);

    }}