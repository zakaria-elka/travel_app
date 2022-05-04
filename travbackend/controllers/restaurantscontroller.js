
const mongoose=require('mongoose');
const { add } = require('nodemon/lib/rules');
const HttpError=require('../modules/http-error')
const Resto=require("../modules/foodplace");



const getAllRestaurants=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({})    
    }
    const getRestaurantByPreferences=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({})    
    }
    const getRestaurantById=async (req,res,next)=>{
        if(false){
            const error=new HttpError("list is empty",500)
        return next(error)}
        res.json({})    
        }
    const updateRestaurantById=async (req,res,next)=>{
        if(false){
            const error=new HttpError("list is empty",500)
        return next(error)}
        res.json({})    
        }
    const deleteRestaurantById=async (req,res,next)=>{
        if(false){
            const error=new HttpError("list is empty",500)
        return next(error)}
        res.json({})    
        }
    const addRestaurant=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    const resto=new Resto({
        name: "tagin amoudai",
       
         
    })
     
    resto.save().then(data=>{
        res.json(data) 
    }).catch(err=>{
        res.json({message:err})
    })
     
    res.json(req.params.userid) 

    res.json({})    
    }
exports.getAllRestaurants=getAllRestaurants;
exports.getRestaurantByPreferences=getRestaurantByPreferences;
exports.getRestaurantById=getRestaurantById;
exports.deleteRestaurantById=deleteRestaurantById;
exports.updateRestaurantById=updateRestaurantById;
exports.addRestaurant=addRestaurant;