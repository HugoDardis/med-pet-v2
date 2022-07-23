const {
    Cliente
} = require('../models');
const bcrypt = require('bcrypt');


module.exports = {
    login: (req, res) => {
        const {
            email,
            senha
        } = req.body;
        Cliente.findOne({
            where: {
                email: email
            }
        }).then(cliente => {
            if (cliente) {
                if (bcrypt.compareSync(senha, cliente.senha)) {
                    req.session.cliente = cliente;
                    res.redirect('/home01');
                } else {
                    res.redirect('/login');
                }
            }
        }).catch(err => {
            console.log(err);
        });

    },

    novoUsuario: async (req, res) => {
        const {
            CPF,
            nome,
            email,
            senha,
        } = req.body;

        let senhaCript = bcrypt.hashSync(senha, 10);
        const novoCliente = await Cliente.create({
            CPF,
            nome,
            email,
            senha: senhaCript,
        });
        req.session.cliente = novoCliente;
        return res.redirect('/home01');

    },

    listarClientes: async (req, res) => {
        const clientes = await Cliente.findAll();
        res.send(clientes);
    },
    buscarCliente: async (req, res) => {
        const {
            id
        } = req.params;
        const cliente = await Cliente.findByPk(id);
        res.send(cliente);
    },
    atualizarCliente: async (req, res) => {

        const {
            id
        } = req.params;

        const {
            CPF,
            nome,
            email,
            senha,
        } = req.body;

        // let senhaCript = bcrypt.hashSync(senha, 10);

        const cliente = await Cliente.update({
            CPF,
            nome,
            email,
            senha: senhaCript,
        }, {
            where: {
                id,
            }
        });
        res.send(cliente);
    },
    deletarCliente: async (req, res) => {

        const {
            id
        } = req.params;

        const cliente = await Cliente.destroy({
            where: {
                id,
            }
        });

        res.send(cliente);
    },
    
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