const express = require('express'); //Importando o módulo express.
const OngController = require('./controllers/OngController')


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
// List ongs route.
//------------------------------------------------------------------------------
routes.get('/ongs', async (request, response) => {
  return OngController.list(request, response)
})


//------------------------------------------------------------------------------
// Create ongs route.
//------------------------------------------------------------------------------
routes.post('/ongs', async (request, response) => {
  return OngController.create(request, response)
});


module.exports = routes; //Exportar a variável routes como módulo.