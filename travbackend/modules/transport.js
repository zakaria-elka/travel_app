const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const transportShema=new Schema({
    
    name:{type:String},
    depart:{type:String},
    finish:{type:String},
    prix:{type:Number},
     
     
});
module.exports=mongoose.model('Transport',transportShema);