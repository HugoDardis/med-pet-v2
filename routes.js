const {
  Router
} = require('express');
const express = require('express');
const routes = express.Router();
const IndexController = require('./controllers/IndexController');
const UsuariosController = require('./controllers/UsuariosController');
const ConsultoriosController = require('./controllers/ConsultoriosController');
const VerificaClienteLogado = require('./middlewares/VerificaClienteLogado');
const VerificaConsultorioLogado = require('./middlewares/VerificaConsultorioLogado');


routes.get('/', IndexController.verPaginaInicial);

routes.get('/contato', IndexController.verPaginaContato);

routes.get('/produtos', IndexController.verPaginaDeProdutos);

routes.get('/login', IndexController.verPaginaDeLogin);

routes.post('/login', UsuariosController.login);

routes.get('/registrar', IndexController.verPaginaDeRegistro);

routes.post('/registrar', UsuariosController.novoUsuario);

routes.get('/home01', VerificaClienteLogado, IndexController.verPaginaDeHome01);

routes.get('/homeConsultorio', IndexController.verPaginaHomeConsultorio);

routes.post('/cadastrar-consultorio', ConsultoriosController.cadastrar);

routes.get('/homeConsultorio', VerificaConsultorioLogado, IndexController.verPaginaHomeConsultorio);

routes.get('/cadastrar-consultorio', IndexController.verPaginaDeCadastrarConsultorio); 

module.exports = routes;

