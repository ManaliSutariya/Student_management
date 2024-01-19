const mongoose = require('mongoose');

const studentdb = new mongoose.Schema({
    firstname:{type:String},
    middlename:{type:String},
    lastname:{type:String},
    gender:{type:String},
    faculty_id:{type: mongoose.Schema.Types.ObjectId,ref: "member"},
    contect:{type:Number},
    address:{type:String},
    course_name:{type: mongoose.Schema.Types.ObjectId,ref: "course"},
    pc_no:{type:String},
    startingdate:{type:Date,default:Date.now},
    enddate:{type:Date},
    fee_stu:[]
})

module.exports = mongoose.model('student',studentdb)