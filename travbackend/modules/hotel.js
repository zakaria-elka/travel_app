const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const hotelShema=new Schema({
    name:{type:String},
    description:{type:String},
    city:{type:String},
    quartier:{type:String},
    prix:{type:Number},
    image:{type:String},
    resto:{type:mongoose.Types.ObjectId,ref:"Foodplace"}
     
});
module.exports=mongoose.model('Hotel',hotelShema);