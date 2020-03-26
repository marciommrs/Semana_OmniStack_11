const express = require('express'); // Importando o módulo express.
const routes = require('./routes'); // Importando o módulo de rotas ("./" usado pois se trata de um arquivo e não um pacote).

const app = express(); // Criando a aplicação.

app.use(express.json()); // Informar o express o formado do corpo das requisições.

app.use(routes); // Informa o uso do módulo de rotas.

app.listen(3333); //Fazendo a aplicação escutar a porta 3333 (localhost:3333).