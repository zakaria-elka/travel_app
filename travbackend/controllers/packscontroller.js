
const mongoose=require('mongoose');
const { add } = require('nodemon/lib/rules');
const HttpError=require('../modules/http-error')
const Hotel=require("../modules/hotel");
const Resto=require("../modules/foodplace");
const Transp=require("../modules/transport")
const Pack=require("../modules/pack")
const ToId=mongoose.Types.ObjectId;

const getPackByPreferences=async (req,res)=>{
     
const depart=req.params.depart;
const city=req.params.city;
const hotels= await Hotel.where("city").equals(city).populate({path:"resto",model:"Foodplace"});
     
    const transp= await Transp.where("depart").equals(depart).where("finish").equals(city);
    res.json({"hotels":hotels ,"transports":transp}) 


}
const getAllPacks=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    const hotels= await Hotel.find().populate({path:"resto",model:"Foodplace"});
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

    
    const hotels= await Hotel.where("city").equals(req.params.city).where("prix").lt((req.params.budget*0.35)/req.params.nuits).populate({path:"resto",model:"Foodplace"});
     const transport=await Transp.where("depart").equals(req.params.depart).where("finish").equals(req.params.city).where("prix").lt((req.params.budget*0.05));
        console.log(req.body); 
        res.json({"hotels":hotels,"transport":transport})  
        }

   
    const addToFavorites=async (req,res,next)=>{
      
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    req.body.hotelid=ToId(req.body.hotelid)
    req.body.transportid=ToId(req.body.transportid)
    req.body.restoid=ToId(req.body.restoid)
    //verification if theres a similar pack
   const search=await Pack.find({ "hotelId": { _id:req.body.hotelid}, "foodId": { _id: req.body.restoid }, "transportId": { _id: req.body.transportid }, "userId": req.body.userid} );
   //.where("hotelId").equals(req.body.hotelid).where("userId").equals(req.body.userId).where("foodId").equals(req.body.restoid)
   //.where("transportId").equals(req.body.transportid);
   console.log("length : "+search.length)
     
    if(search.length>0)
    return res.status(409).json("existing pack")
    if(search.length===0)
     {const pack=new Pack({
        userId: req.body.userid,
        hotelId: ToId(req.body.hotelid),
        foodId:ToId(req.body.restoid),
        transportId:ToId(req.body.transportid)
         
    })
     
    pack.save().then(data=>{
        console.log(data)
    }).catch(err=>{
 
        console.log(err)
        return res.status( 404 )
    })}
    console.log(req.body)
     
    res.json("pack added")    
 
    }

    const removeFromFavorites=async (req,res,next)=>{
        if(false){
            const error=new HttpError("list is empty",500)
        return next(error)}
        const search=await Pack.findById(req.params.packid)
        
        if(!search){
            res.status(404).json("innexisting")
         }
    else{
        const deletedpack=await Pack.remove({_id:req.params.packid})
    res.json({"removed":deletedpack}) 
    }

        }


    const showPack=async(req,res)=>{
const pack=await Pack.findById(req.params.packid).populate({path:"hotelId",model:"Hotel"});

res.json(pack);
    }
exports.getAllPacks=getAllPacks;
exports.getPackByPreferences=getPackByPreferences;
exports.getUserPack=getUserPack;
exports.showPack=showPack;
exports.addToFavorites=addToFavorites;
exports.removeFromFavorites=removeFromFavorites;
 