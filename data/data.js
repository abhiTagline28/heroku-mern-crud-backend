const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(`${process.env.DB}`).then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(err);
})
// mongoose.connect('mongodb://localhost:27017/demo').then(()=>{
//     console.log('database connected');
// }).catch((err)=>{
//     console.log(err);
// })


module.exports = mongoose