
const mongoose=require('mongoose');
const { add } = require('nodemon/lib/rules');
const HttpError=require('../modules/http-error')
const Hotel=require("../modules/hotel");
const Resto=require("../modules/foodplace");
const Transp=require("../modules/transport")


const getAllPacks=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    const hotels= await Hotel.find();
    const restos= await Resto.find();
    const transp= await Transp.find();
    res.json({"hotels":hotels,"restos":restos,"transports":transp})    
    }
    const getPackWithPreferences=async (req,res,next)=>{
    /*if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    const hotels= await Hotel.equals("marrakech").where("prix").lt(400);
    const restos= await Resto.find();
    const transp= await Transp.find();*/
    //res.json({"hotels":hotels,"restos":restos,"transports":transp})   
    const hotels= await Hotel.where("city").equals(req.body.city).where("prix").lt((req.body.budget*0.23)/req.body.nuits) ;
    console.log(req.body); 
    res.json({ "city":hotels})  
    }
   
    const addToFavorites=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({})    
    }
exports.getAllPacks=getAllPacks;
exports.getPackWithPreferences=getPackWithPreferences;
exports.addToFavorites=addToFavorites;
 