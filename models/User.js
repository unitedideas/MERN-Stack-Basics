const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Scheme
const UserSchema = new Schema({
    name: {
        type: String,
        type: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },  
})

modules.exports = User = mongoose.model('users', UserSchema)