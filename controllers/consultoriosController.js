const {consultorio}=require('../models');
const {Op} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports ={
    cadastrar: async (req, res) => {
        try{
            const {cnpj, email, senha} = req.body;

            return res.json(req.body);
        }
    catch (error) {
        console.log(error);
        res.status(500).json({error});
    }

    const novoCliente = await Cliente.create({
        CPF,
        nome,
        email,
        senha,
    });
    res.send(novoCliente);

    } 
}
