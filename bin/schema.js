const mongoose = require('mongoose')

const demoUser = new mongoose.Schema({
    name:{
        type:String,
        },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:String,
        
    },
    city:{
        type:String,
    },
    otp:{
        type:String,
    },
    password:{
        type:String,
    }
})

module.exports = mongoose.model('demoUser', demoUser)