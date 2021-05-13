module.exports = {
    nombre: 'tentacles',
    alias: ["htentacles"],
    run:  async (client, message, args) => {
        const Discord = require("discord.js");
        const akaneko = require('akaneko');

        if (!message.channel.nsfw)return message.channel.send(":underage: No es un canal NSFW :underage:")
        const random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription('Tentáculos >///<')
        .setImage(await akaneko.nsfw.tentacles());
        return message.channel.send(random);

    }}