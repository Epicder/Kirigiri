module.exports = {
    nombre: 'yuri',
    alias: [],
    run:  async (client, message, args) => {
        const Discord = require("discord.js");
        const akaneko = require('akaneko');

        if (!message.channel.nsfw)return message.channel.send(":underage: No es un canal NSFW :underage:")
        const random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription('Yuri hentai >///<')
        .setImage(await akaneko.nsfw.yuri());
        return message.channel.send(random);

    }}