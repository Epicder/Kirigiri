

module.exports = {
    nombre: 'eggplant',
    run:  async (client, message, args) => {

        const Discord = require("discord.js");

    let usuario = message.mentions.members.first() || message.member;
    
    let decimal = Math.random() * 20 + 1;
    let numero = Math.floor(decimal);
    
             const embed = new MessageEmbed()
    
               embed.setColor("B900FF")
    
               .setTitle(`La  :eggplant:  de   @${usuario.user.username}   mide ${numero} centímetros >//<`)
    
               embed.setImage("https://images.emojiterra.com/google/android-10/512px/1f346.png")
    
               embed.setFooter("Pedido por: " + message.member.displayName, message.author.displayAvatarURL());
    
              return message.channel.send(embed)
    }}
    