

module.exports = {
    nombre: 'avatar',
    run:  async (client, message, args) => {
        
        const Discord = require("discord.js");
let usuario = message.mentions.members.first() || message.member;
const embed = new Discord.MessageEmbed()
  embed.setColor("B900FF")
  embed.setTitle(`Foto de perfil/Avatar de **` + `${usuario.user.username}` + "**")
  embed.setImage(usuario.user.displayAvatarURL( {size: 1024, dynamic: true } ))
 return message.channel.send(embed)

}}