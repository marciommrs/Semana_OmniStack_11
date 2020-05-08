const express = require('express'); //Importando o módulo express.
const { celebrate, Segments, Joi } = require('celebrate'); //Importando módulo de validação

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

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


// Login
routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
}), SessionController.create);


//------------------------------------------------------------------------------
// Ongs routes.
//------------------------------------------------------------------------------

// Listar ONGs
routes.get('/ongs', OngController.index);

// Criar ONG
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}),OngController.create);

// Listar incidentes por ONG
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}),ProfileController.index);

//------------------------------------------------------------------------------
// Incidents route.
//------------------------------------------------------------------------------

// Listar incidentes
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}),IncidentController.index);

// Criar incidentes
routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY] : Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required()
  })
}),IncidentController.create);

// Apagar incidente
routes.delete('/incidents/:id', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}),IncidentController.delete);


module.exports = routes; //Exportar a variável routes como módulo.