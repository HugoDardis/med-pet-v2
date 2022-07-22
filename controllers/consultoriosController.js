const {consultorio}=require('../models');
const {Op} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports ={
    cadastrar: async (req, res) => {
        try{
            const {CNPJ, email, senha} = req.body;

            return res.json(req.body);

            let senhaCript = bcrypt.hashSync(senha, 10);
        }
    catch (error) {
        console.log(error);
        res.status(500).json({error});
    }

    const novoConsultorio = await Consultorio.create({
        CNPJ,
        email,
        senha,
    });
    res.send(novoConsultorio);

    } 
}
