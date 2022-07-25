const {
    pet
} = require('../models');
const bcrypt = require('bcrypt');


module.exports = {
    cadastrarPet: async (req, res) => {
        const {
            RGA,
            nome,
            raca,
            tipoAnimal,
            cliente_id: references_cliente_id = {
                model: {
                    tableName: "clientes"
                },
                key: "id"
            }
        } = req.body;

        const novoPet = await pet.create({
            RGA,
            nome,
            raca,
            tipoAnimal,
            references_cliente_id
        });
        res.send(novoPet);
        //return res.redirect('/home01');
    },

    listarPets: async (req, res) => {
        const pets = await pet.findAll();
        res.send(pets);
    },

    listarUmPet: async (req, res) => {
        const {
            id
        } = req.params;
        const pet = await pet.findByPk(id);
        res.send(pet);
    }



}