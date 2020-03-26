const express = require('express'); //Importando o módulo express.

const routes = express.Router(); //Desacoplar o módulo de rotas na variável routes.

routes.get('/', (request, response) => {
  return response.json({
    evento:'Semana OmniStack 11.0',
    aluno: 'Marcio Marques Rosa'
  });
}); //Criando a rota raiz retornando um objeto Json.

module.exports = routes; //Exportar a variável routes como módulo.