const {Servico} = require('../models');

(async ()=> {
    let servicos = await Servico.findAll();
    console.log(servicos.map(c=>c.toJSON()));
})();