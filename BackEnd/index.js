const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const registerModel = require('./Models/Register');
const postModel = require('./Models/Post');
const bcrypt = require('bcrypt');
const multer = require('multer');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json())
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

const storage = multer.diskStorage({
destination: (req,file,cb) => cb(null, '/uploads'),
filename: (req,file,cb) => cb(null, Date.now()+'_'+file.originalname)
})

const uploads = multer({storage})

app.post('/addPost',uploads.single('image'),(req,res)=>{
  const {title,description} = req.body;
  const imageUrl = `/uploads/${req.file.filename}`;

  postModel.create({
    title:title,
    description: description,
    imageUrl:imageUrl
  })
  .then(result => res.json(result))
  .catch(err => res.json(err))
})


mongoose.connect('mongodb://localhost:27017/authentication');

app.listen(3000,()=>{
    console.log('server is running');
})