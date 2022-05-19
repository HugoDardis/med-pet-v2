const http = require('http');
const port = 3000;
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    switch (req.url) {
        case '/':
            res.end('Página inicial');
            break;
        case '/contato':
            res.end('Página de contato');
            break;
        case '/login':
            res.end('Página de login');
            break;
        default: 
            res.end('Página não encontrada')       
    }
}).listen(port, () => console.log(`Servidor rodando na porta: ${port}`));