const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const packSchema=new Schema({
    userId:{type:String},
    hotelId:{type:mongoose.Types.ObjectId,ref:"Hotel"},
    transportId:{type:mongoose.Types.ObjectId,ref:"Transport"},
    foodId:{type:mongoose.Types.ObjectId,ref:"Foodplace"},
    
     
});
module.exports=mongoose.model('Pack',packSchema);