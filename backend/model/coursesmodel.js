const mongoose = require('mongoose');

const course = new mongoose.Schema({
  name:{type:String},
  languages:[{language_id:{type:mongoose.Schema.Types.ObjectId,ref:"language"}}],
  description:{type:String},
  duration:{type:Number},
  fee:{type:Number}
})

module.exports = mongoose.model('course',course)