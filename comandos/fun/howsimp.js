module.exports = {
    nombre: 'howsimp',
    alias: ["simp"],
    run:  async (client, message, args) => {

        const Discord = require("discord.js");
        let random = Math.floor(Math.random() * 100)
        let userm = message.mentions.users.first()

        const embeda = new Discord.MessageEmbed()
.setColor("0x3ef2f8")

.setTitle(`${random}% 😳`)


.setFooter("" + message.member.displayName,  message.author.displayAvatarURL());


if (!userm) return message.channel.send(embeda)

        
                 const embed = new Discord.MessageEmbed()
        
                   .setColor("0x3ef2f8")
                   
                   .setTitle(`${random}% 😳`)
        
                   .setFooter(`  ${userm.username}`, userm.displayAvatarURL());
        
                  return message.channel.send(embed)


               

          
        }

}