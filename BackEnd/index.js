const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const registerModel = require('./Models/Register');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(cors())

app.post('/register',(req,res)=>{
  const {name,email,password} = req.body;
  bcrypt.hash(password,10)
    .then(hash => {
      registerModel.create({
        name:name,
        email:email,
        password:hash
      })
    })
    .catch(err => res.json(err))

})

app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    registerModel.findOne({email:email})
    .then(user=>{ 
        if(user){
          bcrypt.compare(password,user.password, (err,response) => {
            if(err){
              res.json('password is wrong');
            }
            if(response){
              res.json('success')
            }
          })
        }else{
            res.json('User is not found!!')
        }
    })
    .catch(err => res.json(err))
})

mongoose.connect('mongodb://localhost:27017/authentication');

app.listen(3000,()=>{
    console.log('server is running');
})