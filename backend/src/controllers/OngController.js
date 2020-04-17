const connection = require('../database/connection'); //Importando a conexão.
const crypto = require('crypto'); //Importando pacote de criptografia do note.

module.exports = {
  //------------------------------------------------------------------------------
  // List ongs.
  //------------------------------------------------------------------------------
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  //------------------------------------------------------------------------------
  // Create ongs.
  //------------------------------------------------------------------------------
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
