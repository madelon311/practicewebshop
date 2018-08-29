var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    fullname: {type: String, required: true},
    address: {type: String, required: true},
    postalcode: {type: String, required: true},
    city: {type: String, required: true},
    email: {type: String, required: true},
    mapShoppingCart: [{type: Schema.Types.Mixed}]
});

module.exports = mongoose.model('Order', schema);