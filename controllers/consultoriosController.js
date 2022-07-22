const {consultorio}=require('../models');
const {Op} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports ={
    cadastrar: async (req, res) => {
        try {
            const { email, senha} = req.body;
            return res.json(req.body);
<<<<<<< HEAD

            let senhaCript = bcrypt.hashSync(senha, 10);
=======
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
>>>>>>> e87c4d12aac3e0f004b9c4c99bd0352ec49d9ea4
        }

        const novoConsultorio = await Consultorio.create({
            CNPJ,
            email,
            senha,
        });
        res.send(novoConsultorio);

    } 
}
