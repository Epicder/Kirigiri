module.exports = {
    nombre: 'servericon',
    alias: ["svicon"],
    run:  async (client, message, args) => {
        
        const Discord = require("discord.js");
let icono = message.guild.iconURL({size : 2048, dynamic: true})
const embed = new Discord.MessageEmbed()
.setDescription(`Ícono del servidor **${message.guild.name}**`)
.setColor("B900FF")
.setImage(`${icono}`)
message.channel.send(embed)
}}
