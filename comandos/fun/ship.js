
module.exports = {
    nombre: 'ship',
    run:  async (client, message, args) => {

    const { createCanvas, loadImage } = require('canvas')
    const Discord = require("discord.js");

  const canvas = createCanvas(399, 137) //Creamos una imagen de 300, 300 
 

  const ctx = canvas.getContext('2d')

  let user = message.mentions.users.first()
  let aut = message.author
  let random = Math.floor(Math.random() * 100)
  let palabras = ""


  if(!user) return message.channel.send("**Menciona a la persona con la que te quieras shipear n.n**")
if (user.id.startsWith("779773549547880479")){
  return message.reply('**Lo siento, pero mi corazón le pertenece a Makoto <:heart_kirigiri:770378964941668372>**')
 }

  const background = await loadImage("./wallpaper.png")
ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

const y= 100, radio= 45, x=canvas.width/2-radio


const imagen = await loadImage(user.displayAvatarURL({dynamic: false, size:256, format:"png"}))


ctx.drawImage(imagen, 275, 25, radio*2, radio*2)
 
const imagen2 = await loadImage(aut.displayAvatarURL({dynamic: false, size:256, format:"png"}))

ctx.drawImage(imagen2, 35, 25, radio*2, radio*2)
 

  

ctx.fillStyle = '#A9A3A3'; //Color de lo que pasara abajo
 
ctx.font = '23px Verdana'


ctx.fillText(random + "%", 175, 75) 

if (random < 30) {//definimos la variable vacias con un objeto tipo string adentro
  palabras = `Lo siento, no son para nada compatibles <a:KirigiriObjection:787727019357634610>`;
} else if (random < 50) {
  palabras = `Quedarían mejor como amigos (^ω^)`;
} else if (random < 70) {
  palabras = `Tienen compatibilidad n.n`;
}
 else if (random < 90) {
  palabras =`Van a tener un lindo futuro juntos (ꈍᴗꈍ)`
}
else if (random < 101) {
  palabras =`Definitivamente estan hechos el uno para el otro <:Kirigiri_love:770372929241743388>`
}

  const attach = new Discord.MessageAttachment(canvas.toBuffer(), 'ship.png') // Obtenemos la imagen a enviar
  const embed = new Discord.MessageEmbed()
  .setTitle(palabras)
  .setColor("245E92")
  .setImage("attachment://ship.png")
  .attachFiles(attach)
  message.channel.send(embed)
  
}}