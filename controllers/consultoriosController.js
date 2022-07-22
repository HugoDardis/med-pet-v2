const {Consultorio}=require('../models');
const {Op} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports ={
    cadastrar: async (req, res) => {
        let senhaCript;
        const {nome, email, senha, cep, uf, endereco, numero, telefone, complemento} = req.body;
        try {
            
            senhaCript = bcrypt.hashSync(senha, 10);
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
        
        const novoConsultorio = await Consultorio.create({
            nome,
            email,
            senha: senhaCript,
            cep,
            uf,
            endereco,
            numero,
            telefone,
            complemento
        });
        
        res.send(novoConsultorio);

    } 
}
