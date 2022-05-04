const mongoose=require('mongoose');
const { add } = require('nodemon/lib/rules');
const HttpError=require('../modules/http-error')
const Hotel=require("../modules/hotel");
const hotel = require('../modules/hotel');


//const hotelsByMongo=require('../modules/hotel');


       
const getAllHotels=async (req,res,next)=>{
    //to test the api get req on http://localhost:5000/api/hotels/all

//;
   /* if(DUMMY_DATA.length===0){
        //try{hotels =await hotelsByMongo.find();}
        const error=new HttpError("list is empty",500)
    return next(error)}*/

    const hotels= await Hotel.find();
    res.json({"hotels":hotels});
    }

const getHotelByPreferences=async (req,res,next)=>{
if(false){
    const error=new HttpError("list is empty",500)
return next(error)}

res.json({})    
}
const getHotelById=async (req,res,next)=>{
    // to test get request (link....hotels/(id)) example http://localhost:5000/api/hotels/6258afe7c3cb342322084bcc
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    const specificHotel=await Hotel.findById(req.params.id)
    res.json({"hotelById":specificHotel})
      
    }
const updateHotelById=async (req,res,next)=>{
    //to test the api methode patch(link.../set/+id) http://localhost:5000/api/hotels/set/6258bb1ec3cb342322084bd7
   /* if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({})    */
    //update name only
    
    const hotel=await Hotel.updateOne({_id:req.params.id},{ $set:{name:req.body.name}})
    res.json({"change":true})
    }
const deleteHotelById=async (req,res,next)=>{
    //to test api methode delete http://localhost:5000/api/hotels/delete/6258bb1ec3cb342322084bd7
   /* if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({})  */
    const hotel=await Hotel.remove({_id:req.params.id})
    res.json({"removed":hotel})  
    }

///////////////////////post////////////////
const addHotel=async (req,res,next)=>{
    //to test the api : post request on http://localhost:5000/api/hotels/add 
  /*  if(false){
        const error=new HttpError("list is empty",500) 
    return next(error)}
    const hotel=new Hotel({
        name:req.body.name,
        description:req.body.description,

    })
    hotel.save().then(data=>{
        res.json(data) 
    }).catch(err=>{
        res.json({message:err})
    })*/
    console.log(req.body);
    
    
    //console.log(req.body)
    }
exports.getAllHotels=getAllHotels;
exports.getHotelByPreferences=getHotelByPreferences;
exports.getHotelById=getHotelById;
exports.deleteHotelById=deleteHotelById;
exports.updateHotelById=updateHotelById;
exports.addHotel=addHotel;