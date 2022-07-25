const {
    Pet
} = require('../models');
const bcrypt = require('bcrypt');


module.exports = {
    cadastrarPet: async (req, res) => {
        const {
            RGA,
            nome,
            raca,
            tipoAnimal,
           
        } = req.body;
        console.log(req.body);

        const novoPet = await Pet.create({
            RGA,
            nome,
            raca,
            tipoAnimal,
            cliente_id: req.session.cliente.id  
        });
        //res.send(novoPet);
        return res.redirect('/home01');
    },

    listarPets: async (req, res) => {
        const pets = await Pet.findAll();
        res.send(pets);
    },

    listarUmPet: async (req, res) => {
        const {
            id
        } = req.params;
        const pet = await Pet.findByPk(id);
        res.send(pet);
    }



}