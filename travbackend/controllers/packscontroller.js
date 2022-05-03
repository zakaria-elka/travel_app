
const mongoose=require('mongoose');
const { add } = require('nodemon/lib/rules');
const HttpError=require('../modules/http-error')
const Hotel=require("../modules/hotel");
const Resto=require("../modules/foodplace");
const Transp=require("../modules/transport")
const Pack=require("../modules/pack")
const ToId=mongoose.Types.ObjectId;
const getAllPacks=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    const hotels= await Hotel.find();
    const restos= await Resto.find();
    const transp= await Transp.find();
    res.json({"hotels":hotels,"restos":restos,"transports":transp})    
    }

    const getUserPack=async (req,res,next)=>{
    /*if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    const hotels= await Hotel.equals("marrakech").where("prix").lt(400);
    const restos= await Resto.find();
    const transp= await Transp.find();*/
    //res.json({"hotels":hotels,"restos":restos,"transports":transp})  
     
    req.params.budget=parseInt(req.params.budget);
    req.params.nuits=parseInt(req.params.nuits);
    
    const hotels= await Hotel.where("city").equals(req.params.city).where("prix").lt((req.params.budget*0.23)/req.params.nuits) ;
     
        console.log(req.body); 
        res.json({"hotels":hotels,"transport":{}})  
        }

   
    const addToFavorites=async (req,res,next)=>{
      req.params.hotelid=  ToId(req.params.hotelid)
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    console.log(3)
     
    const pack=new Pack({
        userId: req.params.userid,
        hotelId: req.params.hotelid
         
    })
     
    pack.save().then(data=>{
        res.json(data) 
    }).catch(err=>{
        res.json({message:err})
    })
     
    res.json(req.params.userid)    
    }
    const removeFromFavorites=async (req,res,next)=>{
        if(false){
            const error=new HttpError("list is empty",500)
        return next(error)}
        res.json({})    
        }


    const showPack=async(req,res)=>{
const pack=await Pack.findById(req.params.packid).populate({path:"hotelId",model:"Hotel"});

res.json(pack);
    }
exports.getAllPacks=getAllPacks;
 
exports.getUserPack=getUserPack;
exports.showPack=showPack;
exports.addToFavorites=addToFavorites;
exports.removeFromFavorites=removeFromFavorites;
 