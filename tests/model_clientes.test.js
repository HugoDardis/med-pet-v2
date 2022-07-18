const {Cliente} = require('../models');

(async ()=> {
    let clientes = await Cliente.findAll();
    console.log(clientes.map(c=>c.toJSON()));
})();