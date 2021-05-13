module.exports = {
    nombre: 'invite',
    alias: [],
    run:  async (client, message, args) => {
        
        const Discord = require("discord.js");
        const embed = new Discord.MessageEmbed()
.setTitle("Invitación para tu servidor. <a:KirigiriCheer:787727008188727296>")
.setDescription("[Para invitarme a tu servidor haz click en este mensaje >//<](https://discord.com/oauth2/authorize?client_id=779773549547880479&scope=bot&permissions=8)")
.setFooter("¡Hey! Muchas gracias por considerar agregarme a tu servidor, ¡lo aprecio mucho!")
.setColor("B900FF")
.setImage("https://i.pinimg.com/originals/45/01/dd/4501dd85dedbb710b76d13bc4c047353.gif")

message.channel.send(embed)
}}