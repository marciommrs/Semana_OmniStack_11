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
  },


  //------------------------------------------------------------------------------
  // Delete incidents.
  //------------------------------------------------------------------------------
  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({error : 'Operation not permitted.'}); //Status não autorizado.
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send(); //No content
  }

};