const connection = require('../database/connection'); //Importando a conexão.

module.exports = {
  //------------------------------------------------------------------------------
  // List incidents.
  // http://localhost:3333/incidents?page=2 -> paginação
  //------------------------------------------------------------------------------
  async index(request, response) {
    const { page = 1} = request.query;

    const[count] = await connection('incidents').count();

    const incidents = await connection('incidents')      
      .limit(5) //Limito por 5 ocorrências
      .offset((page -1) * 5) // Começa a partir do 0 e os próximos 5. Offset diz qual é o início.
      .select('*');
    
    console.log(count); //Valor retornado { 'count(*)': 13 }
    response.header('X-Total-Count', count['count(*)']);

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