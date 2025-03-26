const moongose = require('mongoose');

const InputSchema = new moongose.Schema({
    name:{type: String,required:true},
    collegeid:{type:String},
    eventname:{type:String},
    eventteacher:{type:String},
})


module.exports =moongose.model('Register',InputSchema);