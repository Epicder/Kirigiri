
module.exports = {
nombre: 'ping',
alias: [],
run:  async (client, message, args) => {
    
    let ping = Math.floor(message.client.ws.ping);
    message.channel.send("⏱️ Mi tiempo de respuesta es: "+ `${ping}` + "MS");

    }

  }


