
module.exports = {
    nombre: 'snipe',
    alias: [],
    run:  async (client, message, args) => {
        const Discord = require("discord.js");
const msg = client.snipes.get(message.channel.id);
if (!msg) return message.channel.send("No hay nada para snipear.")
const SnipeEmbed = new Discord.MessageEmbed()
.setAuthor(msg.author.tag, msg.author.displayAvatarURL())
.setDescription(msg.content)
.setColor("B900FF")
.setImage(msg.image)

message.channel.send(SnipeEmbed)
}}