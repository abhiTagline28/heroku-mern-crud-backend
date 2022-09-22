const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors({
    origin: '*'
}));

require("./data/data")

const schema = require('./bin/schema')

app.use(express.json())
let otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);


app.get('/',async(req,res) => {
    const findData = await schema.find({})
    res.send(findData);
})


app.post('/',async(req,res) => {
    const user = new schema({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        city:req.body.city,
        otp:otp,
        password:req.body.password
    })
    const saveUser =await user.save()
     res.send(saveUser);

})

app.delete('/',async(req,res) => {
    try {
        const deleteData = await schema.findOneAndRemove({email:req.body.email})
        res.send(deleteData);
      } catch (error) {
        console.log(error);
      }
})

app.patch('/',async(req,res)=>{
    try {
        const updateData = await schema.findOneAndUpdate({email:req.body.email},{$set:{name:req.body.name, city:req.body.city,phone:req.body.phone}})
        res.send(updateData)
    } catch (error) {
        console.log(error);
    }
})

app.post('/register',async(req,res)=>{
    try {
        const findOtp = await schema.findOne({email:req.body.email})
        if(findOtp.otp == req.body.otp){
            res.send({message:"register successfully"})
        }else{
            res.send({message:"otp invalid"})
        }
    } catch (error) {
        console.log(error);
    }
})

app.post('/login',async (req, res) => {
    try {
        const loginUser = await schema.findOne({email:req.body.email})

    } catch (error) {
        console.log(error);
    }
})


const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`server connected and port no ${PORT}`);
})