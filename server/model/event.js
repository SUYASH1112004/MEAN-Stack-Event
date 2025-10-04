const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    _id : {type:String,required:true},
    name : {type: String,required: true},
    description : { type : String,required: true},
    teacher : {type : String,required : true} 
})

module.exports = mongoose.model('Event',eventSchema)