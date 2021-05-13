
module.exports = {
    nombre: '8ball',
    run:  async (client, message, args) => {

        
  let respuesta = ["Si <:Kirigiri_smiling:770428320260554782>", "No", "Tal vez <:kirigiri_calm:770372939773247489>", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente", "Preguntame más tarde", "Claro que sí", "Claro que no ಠ_ಠ", "Te aseguro que sí", "Te aseguro que no"]
  var random = respuesta[Math.floor(Math.random() * respuesta.length)]
message.reply(random)


 }}