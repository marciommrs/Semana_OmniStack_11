const express = require('express'); //Importando o módulo express.

const app = express(); //Criando a aplicação.

app.get('/', (request, response) => {
  return response.json({
    evento:'Semana OmniStack 11.0',
    aluno: 'Marcio Marques Rosa'
  });
}); //Criando a rota raiz retornando um objeto Json.

app.listen(3333); //Fazendo a aplicação escutar a porta 3333 (localhost:3333).