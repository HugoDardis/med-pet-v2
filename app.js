const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const routes = require('./routes');

//Configurações do servidor
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(express.static('public'));

// Rotas
app.use(routes);

//Erros de rota
app.use((req, res, next) => {
    res.status(404).send('Página não encontrada')
});


app.listen(port, () => console.log(`Servidor rodando na porta ${port} 🚀`));