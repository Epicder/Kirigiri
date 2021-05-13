module.exports = {
    nombre: 'clear',
    alias: [],
    run:  async (client, message, args) => {
        let cantidad = parseInt(args[0]);
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("No puedes usar este comando si no eres mod/admin.");
        if(!cantidad) return message.reply("Selecciona la cantidad de mensajes que quieres eliminar.")
    message.channel.bulkDelete(cantidad);

    
    }}