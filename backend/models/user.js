var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    fullname: {type: String, required: true},
    address: {type: String, required: true},
    postalcode: {type: String, required: true},
    city: {type: String, required: true},
    email: {type: String, required: true, unique: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);