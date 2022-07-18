const {Consultorio} = require('../models');

(async ()=> {
    let consultorios = await Consultorio.findAll();
    console.log(consultorios.map(c=>c.toJSON()));
})();