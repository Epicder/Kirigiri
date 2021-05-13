module.exports = {
    nombre: 'nick',
    run:  async (client, message, args) => {

    if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) { //Verificamos si el bot tiene permisos suficientes
    return message.channel.send("[â] No tengo permisos || **Necesito permisos de `Gestionar apodos`**") //lo que dice si no tiene permisos
}
  
if(!message.member.hasPermission("MANAGE_NICKNAMES")){ //Verificamos si user tiene permisos suficientes
    return message.channel.send("[â] No tienes permisos || **Necesitas permisos de `Gestionar apodos`**") //lo que dice si no tiene permisos
}

let persona = message.mentions.members.first() //Definimos "persona" como al que le hizo ping
if(!persona) {
    return message.channel.send("[â] No hay una persona || **Debes mencionar a una persona**") //lo que dice si no menciono a nadie
}else if (persona.roles.highest.comparePositionTo(message.member.roles.highest) > -1) {
        return message.reply('No puedes cambiarle el apodo a alguien de tu mismo rol o mayor')
    }else if (persona.id.startsWith("779773549547880479")){
        return message.reply('**¡Hey! yo me quiero seguir llamando Kirigiri >///<**')
       }
let apodo = args.slice(1).join(' ') //Defiinimos "apodo" como el nuevo apodo del "persona"
if(!apodo) return message.channel.send("[â] No hay apodo || **Debes escribir el apodo a cambiar**") //lo que dice si no hay apodo definido
persona.setNickname(apodo) //El bot hace el cambio del apodo usando "persona" y "apodo"
message.channel.send(`Listo, el nuevo apodo de ${persona} es **${apodo}**`) //Mensaje diciendo el nuevo apodo de la persona
}
        }