

module.exports = {
    nombre: 'akinator',
    alias: ["aki"],
    run:  async (client, message, args) => {

        const akinator = require("mech-aki"); // Llamamos al npm que vamos a usar (mech-aki)
        let Discord = require("discord.js"); // Lo de siempre, definir discord.js
        const embed = new Discord.MessageEmbed().setColor("RANDOM"); // Creamos el Embed.
    
        var aki = new akinator("es") // Creamos el Juego, con idioma "ESPAÑOL"
        var pregunta = await aki.empezar(); // Empezamos el JUEGO
        embed.setAuthor(pregunta.pregunta); // Agregaría un setAuthor al embed, que sería la pregunta
        var respuestas = new Map([
          ["✅", 0],
          ["❌", 1],
          ["❓", 2],
          ["<:thinking_Kirigiri:770428231253098546>", 3],
          ["😞", 4],
          ["🔙", -9]
        ]); 
    
        var respuestasxd = ["✅", "❌", "❓", "<:thinking_Kirigiri:770428231253098546>", "😞", "🔙"]; // hacemos el array de emojis, que serán las respuestas
    
        embed.addField(
          "Opciones",
          `✅: Sí\n❌: No\n❓: No lo sé\n<:thinking_Kirigiri:770428231253098546>: Probablemente sí\n😞: Probablemente no\n🔙: Atrás`,
          false
        ); // agregamos un Field al embed, que dirá lo que significa cada emoji, para que el usuario no se confunda.
    
        var msg = await message.reply(embed); // Enviames el embed mencionando al autor.
        for (let index = 0; index < respuestasxd.length; index++)
          await msg.react(respuestasxd[index]); // Reaccionamos al embed, con el array de emojis que hicimos.
    
        while (aki.progreso < 85) {
          var respuesta = await new Promise((resolve, reject) => {
            var collector = msg.createReactionCollector(
              (reaction, user) =>
                !user.bot &&
                user.id === message.author.id &&
                reaction.message.channel.id === msg.channel.id,
              { time: 60000 }
            );
            collector.on("collect", r => {
              resolve(r.emoji.name);
              collector.stop();
            });
            collector.on("end", collected => resolve(null));
          });
          if (!respuesta) return msg.delete();
          var respuesta_num = respuestas.get(respuesta);
          pregunta =
            respuesta_num != -9
              ? await aki.siguiente(respuesta_num)
              : await aki.atras();
          embed.setAuthor(pregunta.pregunta);
          await msg.edit(embed);
        }
    
        var personajes = await aki.respuestas();
        embed.setAuthor("✅¡Lo descubrí! Tu personaje es: " + personajes[0].nombre);
        embed.setDescription(personajes[0].descripcion); // Descripción del Personaje
        embed.setImage(personajes[0].foto); // Foto del Personaje
        embed.fields = [];
        msg.delete();
        message.reply(embed);

       }}