const express = require('express'); //Importando o módulo express.

const app = express(); //Criando a aplicação.

app.get('/', (request, response) => {
  return response.send('Hello world!');
}); //Criando a rota raiz.

app.listen(3333); //Fazendo a aplicação escutar a porta 3333 (localhost:3333).