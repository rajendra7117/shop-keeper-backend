const mongoose = require('mongoose')

const Schema = mongoose.Schema

const shopSchema = new Schema({
    name: {type: String, required: true},
    operaterName: {type: String, required: true},
    shopLocation: {type: String, required: true},
    category: {type: String, required: true},
    emailAddress : {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('Shop', shopSchema)