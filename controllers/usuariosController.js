const { Cliente } = require('../models');


module.exports = {
    login: (req, res) => {
        res.send("Controller para realizar login!");
    },
    novoUsuario: async (req, res) => {
        const {
            CPF,
            nome,
            email,
            senha,
        } = req.body;

        const novoCliente = await Cliente.create({
            CPF,
            nome,
            email,
            senha,
        });
        res.send(novoCliente);

    }
}


// const verificaSeLogado = (req, res, next) => {

//     if (req.session.cliente == undefined) {


//         return res.redirect('/home01');
//     } else {
//         req.cliente = req.session.cliente;
//         next();
//     }
// }
// module.exports = verificaSeLogado;