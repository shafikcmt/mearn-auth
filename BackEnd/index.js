const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const registerModel = require('./Models/Register');

app.use(express.json());
app.use(cors())

app.post('/register',(req,res)=>{
    registerModel.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

mongoose.connect('mongodb://localhost:27017/authentication');

app.listen(3000,()=>{
    console.log('server is running');
})