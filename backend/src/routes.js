const express = require('express'); //Importando o módulo express.
const crypto = require('crypto'); //Importando pacote de criptografia do note.
const connection = require('./database/connection'); //Importando a conexão.

const routes = express.Router(); //Desacoplar o módulo de rotas na variável routes.


//------------------------------------------------------------------------------
// Default route.
//------------------------------------------------------------------------------
routes.get('/', (request, response) => {
  return response.json({
    evento:'Semana OmniStack 11.0',
    aluno: 'Marcio Marques Rosa'
  });
}); //Criando a rota raiz retornando um objeto Json.



//------------------------------------------------------------------------------
// Create ongs route.
//------------------------------------------------------------------------------
routes.post('/ongs', async (request, response) => {
  createOng(request, response)
});

async function createOng(request, response) {
  const {name, email, whatsapp, city, uf} = request.body;

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

module.exports = routes; //Exportar a variável routes como módulo.