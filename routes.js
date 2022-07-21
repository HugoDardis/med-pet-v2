const { Router } = require('express');
const express = require('express');
const routes = express.Router();
const IndexController = require('./controllers/IndexController');
const UsuariosController = require('./controllers/UsuariosController');
const ConsultoriosController = require('./controllers/ConsultoriosController');

routes.get('/', IndexController.verPaginaInicial);

routes.get('/contato', IndexController.verPaginaContato);

routes.get('/produtos', IndexController.verPaginaDeProdutos);

routes.get('/login', IndexController.verPaginaDeLogin);

routes.post('/login', UsuariosController.login);

routes.get('/register', IndexController.verPaginaDeRegistro);

//routes.put('/register', usuariosController.novoUsuario);

routes.get('/home01', IndexController.verPaginaDeHome01);

routes.post('/cadastrar-consultorio', ConsultoriosController.cadastrar);

routes.get('/cadastrar-consultorio', IndexController.verPaginaDeCadastrarConsultorio); 

module.exports = routes;