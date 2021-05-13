module.exports = {
    nombre: 'gay',
    alias: ["howgay"],
    run:  async (client, message, args) => {

        const Discord = require("discord.js");
        let random = Math.floor(Math.random() * 101)
        let userm = message.mentions.users.first()
      
        var emoji = ["🏳️‍🌈"]
        if (random > 99)var emoji = ["<:twoniggas:803359456539967578>"]
        const embeda = new Discord.MessageEmbed()
.setColor("0x3ef2f8")

.setTitle(`${random}% ${emoji}`)


.setFooter("" + message.member.displayName,  message.author.displayAvatarURL());


if (!userm) return message.channel.send(embeda)


        
                 const embed = new Discord.MessageEmbed()
        
                   .setColor("0x3ef2f8")
        
                   .setTitle(`${random}% ${emoji}`)
        
                   .setFooter(`${userm.username}`, userm.displayAvatarURL());
        
                  return message.channel.send(embed)
        }

}