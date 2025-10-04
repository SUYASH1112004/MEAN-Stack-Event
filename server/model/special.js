const mongose = require('mongoose');

const SpecialSchema = new mongose.Schema({
    _id : {type:String,required:true},
    name : {type: String,required: true},
    description : { type : String,required: true},
    teacher : {type : String,required : true} 
});


module.exports=mongose.model('Special',SpecialSchema);