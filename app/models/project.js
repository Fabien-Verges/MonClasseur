//projet model
    var mongoose = require('mongoose');

    module.exports = mongoose.model('Project', {
        name : String,
        done : Boolean
    });
