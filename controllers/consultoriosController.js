const {Consultorio}=require('../models');
const {Op} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports ={
    cadastrar: async (req, res) => {
        try {
            const { email, senha} = req.body;
            let senhaCript = bcrypt.hashSync(senha, 10);
            return res.json(req.body);
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }

        // const novoConsultorio = await Consultorio.create({
        //     CNPJ,
        //     email,
        //     senha,
        // });
        // res.send(novoConsultorio);

    } 
}
