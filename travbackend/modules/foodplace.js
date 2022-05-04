const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const foodplaceShema=new Schema({
    name:{type:String},
    nearTO:{type:String},
    adress:{type:String},
    prix:{type:String},
     
     
});
 
module.exports=mongoose.model('Foodplace',foodplaceShema);