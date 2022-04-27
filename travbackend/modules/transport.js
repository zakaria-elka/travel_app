const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const transportShema=new Schema({
    name:{type:String},
    description:{type:String},
    ville:{type:String},
    quartier:{type:String},
    prix:{type:Number},
    image:{type:String},
     
});
module.exports=mongoose.model('Transport',transportShema);