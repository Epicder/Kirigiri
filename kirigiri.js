const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
client.snipes = new Map()


client.on("ready", () => {
  console.log(`Estoy lista! UwU, 
           conectada en ${client.guilds.cache.size} servidores y teniendo ${client.users.cache.size} usuarios.`);

  client.user.setPresence( {
      activity: {
          name: `Usuarios definitivos! | "!k help"`,
          type: "LISTENING"
      },
      status: "online"
   });

});


client.on('messageDelete', function (message, channel) {
client.snipes.set(message.channel.id, {
  content: message.content,
  author: message.author,
  image: message.attachments.first() ? message.attachments.first().proxyURL : null
})

})



const db = require("megadb");
const prefix = require("./comandos/utilidad/prefix");
const { alias } = require("./comandos/utilidad/prefix");
    let prefixdb = new db.crearDB("Prefixes");
    

client.comandos = new Discord.Collection()

let archivos = fs.readdirSync("./comandos").filter((a) => a.endsWith(".js"))
let archivos1 = fs.readdirSync("./comandos/rol/").filter((b) => b.endsWith(".js"))
let archivos2 = fs.readdirSync("./comandos/fun/").filter((c) => c.endsWith(".js"))
let archivos3 = fs.readdirSync("./comandos/utilidad/").filter((d) => d.endsWith(".js"))
let archivos4 = fs.readdirSync("./comandos/nsfw/").filter((e) => e.endsWith(".js"))

for(var archi of archivos) {
  let comando = require("./comandos/"+archi)
  client.comandos.set(comando.nombre, comando)
  console.log(archi+" cargado correctamente")
}

for(var archi of archivos1) {
  let comando = require("./comandos/rol/"+archi)
  client.comandos.set(comando.nombre, comando)
  console.log(archi+" cargado correctamente")
}

for(var archi of archivos2) {
  let comando = require("./comandos/fun/"+archi)
  client.comandos.set(comando.nombre, comando)
  console.log(archi+" cargado correctamente")
}
for(var archi of archivos3) {
  let comando = require("./comandos/utilidad/"+archi)
  client.comandos.set(comando.nombre, comando)
  console.log(archi+" cargado correctamente")
}
for(var archi of archivos4) {
  let comando = require("./comandos/nsfw/"+archi)
  client.comandos.set(comando.nombre, comando)
  console.log(archi+" cargado correctamente")
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//agregar mensaje en el clear, mensaje priv en ban.


client.on("message", async message => {

  
  let prefix = prefixdb.has(message.guild.id) ? await prefixdb.get(message.guild.id) : "!k "

  if(!message.content.startsWith(prefix)) return;
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let command = args.shift().toLowerCase();

  let cmd = client.comandos.get(command) || client.comandos.find((k) => alias.includes(command))
  if (cmd) {
 return cmd.run(client, message, args)
  }


  ////////utilidad////////


   
});


  

      
   


 client.login("Nzc5NzczNTQ5NTQ3ODgwNDc5.X7latQ.nDXL_ZPa9fjNns1bw3lKQvZHiVo");


