const mongoosh = require('mongoose');

const User =new mongoosh.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type:String, required: true},
},{collection: 'MERNChatCollection'});

const model = mongoosh.model('MERNChatCollection', User);
module.exports = model
