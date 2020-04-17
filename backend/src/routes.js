const express = require('express'); //Importando o módulo express.
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')


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
// Ongs routes.
//------------------------------------------------------------------------------
routes.get('/ongs', OngController.index) //List
routes.post('/ongs', OngController.create); //create

//------------------------------------------------------------------------------
// Incidents route.
//------------------------------------------------------------------------------
routes.get('/incidents', IncidentController.index) //List
routes.post('/incidents', IncidentController.create); //Create


module.exports = routes; //Exportar a variável routes como módulo.