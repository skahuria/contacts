

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    title: {type: String, required: true},
    email: {type: String, required: true},
    department: {type: String, required: true},
    branch: {type: String, required: true},
    extension: {type: Number, required: true},
    dline: {type: Number, required: true}

});

//model name
module.exports = mongoose.model('Market', schema); 


