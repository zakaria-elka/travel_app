const mongoose=require('mongoose');
const { add } = require('nodemon/lib/rules');
const HttpError=require('../modules/http-error')
 

//const hotelsByMongo=require('../modules/hotel');

let DUMMY_DATA=[];
       
const getAllHotels=async (req,res,next)=>{
//;
    if(DUMMY_DATA.length===0){
        //try{hotels =await hotelsByMongo.find();}
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({data:DUMMY_DATA});
    }

const getHotelByPreferences=async (req,res,next)=>{
if(false){
    const error=new HttpError("list is empty",500)
return next(error)}
res.json({})    
}
const getHotelById=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    
    res.json({})    
    }
const updateHotelById=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({})    
    }
const deleteHotelById=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({})    
    }

///////////////////////post////////////////
const addHotel=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500) 
    return next(error)}
    
    
    console.log(req.body)
    }
exports.getAllHotels=getAllHotels;
exports.getHotelByPreferences=getHotelByPreferences;
exports.getHotelById=getHotelById;
exports.deleteHotelById=deleteHotelById;
exports.updateHotelById=updateHotelById;
exports.addHotel=addHotel;
