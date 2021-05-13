
module.exports = {
    nombre: 'hloli',
    alias: ["loli"],
    run:  async (client, message, args) => {
        const Discord = require("discord.js");
        const akaneko = require('akaneko');

        if (!message.channel.nsfw)return message.channel.send(":underage: No es un canal NSFW :underage:")

        const random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription('???')
        .setImage("https://i.kym-cdn.com/entries/icons/mobile/000/028/207/Screen_Shot_2019-01-17_at_4.22.43_PM.jpg")
        return message.channel.send(random);

    }}
