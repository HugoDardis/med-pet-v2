const {Pet} = require('../models');

(async ()=> {
    let pet = await Pet.findAll();
    console.log(pet.map(c=>c.toJSON()));
})();