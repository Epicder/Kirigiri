
module.exports = {
    nombre: 'slowmode',
    alias: ["sm"],
    run:  async (client, message, args) => {

 const ms = require('ms');
 if(!message.member.hasPermission("ADMINISTRATOR")){
     return message.channel.send('No Tiene Permisos de ejecutar este Comando')
 }
 let channel = message.mentions.channels.first() || message.channel//definimos channel por la mencion y si no ay mencion tomariamos el canal donde se ejecuto el comando
 let time = args.slice(0).join(' ');//definimos tiempo
 if (args[0] == 'off') {
     channel.setRateLimitPerUser(0)
     return message.channel.send('**Slowmode desactivado. •ᴗ•**')
 }
 if(!time) return message.channel.send('No especificaste el **tiempo**')//si no ay tiemo retornamos un mensaje
await channel.setRateLimitPerUser(time);//establecemos el slowmode
return message.channel.send('**¡Entendido! slowmode activado ( ^ ᗜ ^ )**');
//ay una cosa que deven saber y les puede dar error es que si el time es mayor a 6horas dara  error y si es menor a 1 segundo igual dara error para eso podrian hacer condicionales la razon por lo que no lo hize es para simplificar el codigo y sea mas lejible y entendible si les gusto denle like

}}