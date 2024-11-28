const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title:String,
  description:String,
  imageUrl:String  
})

const postModel = mongoose.model('post',PostSchema);

module.exports = postModel;