const {
  Router
} = require('express');
const express = require('express');
const routes = express.Router();
const IndexController = require('./controllers/IndexController');
const UsuariosController = require('./controllers/UsuariosController');


routes.get('/', IndexController.verPaginaInicial);

routes.get('/contato', IndexController.verPaginaContato);

routes.get('/produtos', IndexController.verPaginaDeProdutos);

routes.get('/login', IndexController.verPaginaDeLogin);

routes.post('/login', UsuariosController.login);

routes.get('/registrar', IndexController.verPaginaDeRegistro);

//routes.put('/registrar', usuariosController.novoUsuario);

routes.get('/home01', IndexController.verPaginaDeHome01);

routes.get('/cadastrar-consultorio', IndexController.verPaginaDeCadastrarConsultorio);

module.exports = routes;