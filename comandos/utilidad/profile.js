const { commonfy } = require("booru");

module.exports = {
    nombre: 'pofile',
    alias: [],
    run:  async (client, message, args) => {


const Discord = require("discord.js")// llamamos al npm discord.js 
const db = require("megadb") //llamamos al npm megadb
const profile = new db.crearDB("pofile")//creamos una d

      let user = message.mentions.members.first()  || message.member;

    

      if(!profile.has(`${message.guild.id}.${user.id}`)) { //si el usuario no esta en la db
          await profile.set(`${message.guild.id}.${user.id}`, {//lo agregamos
                desc: "No definida",//sin descripcion
                color: "",//sin color si quieren lo cambian al que gusten
                titulo: "No definido"//sin titulo
           })
        }

        

       let description = args.slice(0).join(' '); profile.get(`${user.id}.desc`)//obtenemos su descripcion de la db
       let titu = await profile.get(`${message.guild.id}.${user.id}.titulo`)//obtenemos el titutlo de la db
       let colors = await profile.get(`${message.guild.id}.${user.id}.color`)//obtenemos el color de la db
   
    

      let prefil = new Discord.MessageEmbed() // creamos un embed
      .setColor(colors)//
      .setThumbnail(user.user.displayAvatarURL()) //su imagen
      .setTitle(`Perfil de ${user.user.username}`)// ponemos su titulo
      .setDescription("Descripción:")
      .addField("." + description)
    
      message.channel.send(prefil)//enviamos el embed

    }    }