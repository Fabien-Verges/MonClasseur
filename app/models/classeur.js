// load mongoose since we need it to define a model
    var mongoose = require('mongoose');

    module.exports = mongoose.model('Classeur', {
        projets : %w[Projet],
        user_id : integer
    });
