module.exports = {
    nombre: 'hgif',
    alias: ['hentaigif'],
    run:  async (client, message, args) => {
        const Discord = require("discord.js");
        const akaneko = require('akaneko');

        if (!message.channel.nsfw)return message.channel.send(":underage: No es un canal NSFW :underage:")

        const random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription('Random Hentai gif >///<')
        .setImage(await akaneko.nsfw.gif());
        return message.channel.send(random);

    }}



