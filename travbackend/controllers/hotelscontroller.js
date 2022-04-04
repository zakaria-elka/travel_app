const mongoose=require('mongoose');
const { add } = require('nodemon/lib/rules');

var data;
       
const getAllHotels=async (req,res,next)=>{
    if(false)
    return next(error)
    res.json(data);
    }

const getHotelByPreferences=async (req,res,next)=>{
if(false)
return next(error)
res.json({})    
}
const getHotelById=async (req,res,next)=>{
    if(false)
    return next(error)
    
    res.json({})    
    }
const updateHotelById=async (req,res,next)=>{
    if(false)
    return next(error)
    res.json({})    
    }
const deleteHotelById=async (req,res,next)=>{
    if(false)
    return next(error)
    res.json({})    
    }

///////////////////////post////////////////
const addHotel=async (req,res,next)=>{
    if(false)
    return next(error)
    
    data=req.body
    console.log(req.body)
    }
exports.getAllHotels=getAllHotels;
exports.getHotelByPreferences=getHotelByPreferences;
exports.getHotelById=getHotelById;
exports.deleteHotelById=deleteHotelById;
exports.updateHotelById=updateHotelById;
exports.addHotel=addHotel;
