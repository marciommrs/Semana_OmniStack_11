const connection = require('../database/connection'); //Importando a conexão.

module.exports = {
  //------------------------------------------------------------------------------
  // List incidents.
  //------------------------------------------------------------------------------
  async index(request, response) {
    const incidents = await connection('incidents').select('*');

    return response.json(incidents);
  },

  //------------------------------------------------------------------------------
  // Create incidents.
  //------------------------------------------------------------------------------
  async create(request, response) {
    const { title, description, value } = request.body;

    //Guarda informações sobre o contexto da requisição.
    //Dados da autenticação do usuário, da localização, do idioma.
    const ong_id = request.headers.authorization; 

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  }

};