module.exports = {
    nombre: 'prefix',
    alias: [],
    run:  async (client, message, args) => {

const db = require("megadb");
let prefixdb = new db.crearDB("Prefixes");


let prefixchiquito = args.join(" ");

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("¡Necesitas tener permiso de administrador para usar esto!");


if(!prefixchiquito) return message.channel.send("¡Escribe un prefix!");



message.channel.send("**Cambiando prefix...**").then(m => {

prefixdb.set(message.guild.id, prefixchiquito).catch((e) => {

m.edit("Ha ocurrido un error y no se pudo cambiar el prefix.")
console.log(e.stack)
}).then(() => {

m.edit(`**Prefix cambiado a ${prefixchiquito}** <a:KirigiriCheer:787727008188727296>`)
})
})





let prefix = prefixdb.has(message.guild.id) ? await prefixdb.get(message.guild.id) : "!k ";
    }}

