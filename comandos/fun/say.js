
module.exports = {
    nombre: 'say',
    run:  async (client, message, args) => {

        let say = args.slice(0).join(' ');
        if(!say) return message.channel.send("La sintaxis del comando es `!k say Tu Texto` ... N-No me hagas decir cosas sucias, ¡Baka!")
          
        message.channel.send(say)
        message.delete({timeout:1})
      }}