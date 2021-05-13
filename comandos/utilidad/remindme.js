
module.exports = {
    nombre: 'remindme',
    alias: ["remind", "rm"],
    run:  async (client, message, args) => {

  const ms = require("ms");
  const Discord = require("discord.js");
  
  let tiempo = args[0]; //declaramos que tiempo sera el primer argumento
   if(!tiempo) return message.channel.send("Sintaxis incorrecta: ´Tiempo´ ´Recordatorio´")
  
  let tiempoMS = ms(tiempo)
    if(!tiempoMS) return message.channel.send("Solo puedes poner números en el tiempo.")
 
       let recordatorio = args.slice(1).join(" "); 
       if (!recordatorio) return message.channel.send("Pon el recordatorio que quieras.")
 
       const exitosoDM = new Discord.MessageEmbed()
        .setDescription(`**¡Entendido! <:Kirigiri_smiling:770428320260554782> Te recordaré tu mensaje en cuanto acabe el tiempo.**`)
        .addField("Recordatorio:", recordatorio)
        .setColor("B900FF")
        message.channel.send(exitosoDM);
 
       setTimeout(function(){
           const tempDM = new Discord.MessageEmbed() 
            .setDescription(`**<a:KirigiriCheer:787727008188727296> ¡Se acabó el tiempo! <a:KirigiriCheer:787727008188727296>**`)
            .addField("Tu Recordatorio:", recordatorio)
            .setColor("B900FF")
           message.author.send(tempDM).catch((err) => message.channel.send(message.author, alarmaDM)) //ponemos .catch para que mande el mensaje a el canal donde se ejecut� el comando + mencion. (El .catch para evitar que nos d� un error en consola diciendo que no se puede mandar mensajes a el message.author)
       }, ms(tiempo))
  
     
   }}