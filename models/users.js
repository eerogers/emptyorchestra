var mongoose = require('mongoose')

var Schema = mongoose.Schema

var usermodel = new Schema({
    name: {
        type: String
    },
    groupArray: {
        type: Array
    },
    songArray: {
        type: Array
    }
})

var User = mongoose.model('User', usermodel)

module.exports = User