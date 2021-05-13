module.exports = {
    nombre: 'ban',
    run:  async (client, message, args) => {


const Discord = require("discord.js");
    if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
        return message.channel.send('No tengo permisos para banear personas')
      }
      
      if (!message.member.permissions.has('BAN_MEMBERS')) {
        return message.channel.send('No puedes usar este comando si no eres Mod/Admin.')
      }
      
      let persona = message.mentions.members.first() || message.mentions.users.first();
        message.guild.members.resolve(args[0])
      
      
      if (!persona) {
        return message.channel.send('Debe mencionar a alguien para banear')
  
      }else if (persona.roles.highest.comparePositionTo(message.member.roles.highest) > -1) {
        return message.reply('No puedes banear a alguien de tu mismo rol o mayor')
      }
      else if(persona.id.startsWith("779773549547880479")){
        return message.reply('¿Que he hecho para que me banees? (╥﹏╥)')
       }
       
      else if(!persona.bannable){
        return message.channel.send('No puedo banear a esta persona')
      }
      
      
      var razon = args.slice(1).join(' ')
      if (!razon) {
        razon = 'No especificada.'
      }
  
      
      const banR = new Discord.MessageEmbed()
      .setTitle(`${persona.displayName} __Se fue castigad@ por Monokuma.__ <a:upupupu:770428753469112320>`)
      .setColor("A41212")
      .setDescription(`Razón: **${razon}**`)
      .setThumbnail("https://pa1.narvii.com/5839/434ce2fdc03a0d7f69ab0bee0babf791780527db_hq.gif")
      .setFooter(`Baneado por ` + message.member.displayName, message.author.displayAvatarURL())
  
      
      message.channel.send(banR)
  
      message.guild.members.ban(persona, {
        reason: razon
        })
  
        
        .catch(e => message.reply("Error inesperado. Prueba denuevo."))
        .then(() => { return
        })
        
          
  
    }}