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
    } 
}
