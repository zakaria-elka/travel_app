
const mongoose=require('mongoose');
const { add } = require('nodemon/lib/rules');
const HttpError=require('../modules/http-error')





const getAllTransports=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({})    
    }
    const getTransportByPreferences=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({})    
    }
    const getTransportById=async (req,res,next)=>{
        if(false){
            const error=new HttpError("list is empty",500)
        return next(error)}
        res.json({})    
        }
    const updateTransportById=async (req,res,next)=>{
        if(false){
            const error=new HttpError("list is empty",500)
        return next(error)}
        res.json({})    
        }
    const deleteTransportById=async (req,res,next)=>{
        if(false){
            const error=new HttpError("list is empty",500)
        return next(error)}
        res.json({})    
        }
    const addTransport=async (req,res,next)=>{
    if(false){
        const error=new HttpError("list is empty",500)
    return next(error)}
    res.json({})    
    }
exports.getAllTransports=getAllTransports;
exports.getTransportByPreferences=getTransportByPreferences;
exports.getTransportById=getTransportById;
exports.deleteTransportById=deleteTransportById;
exports.updateTransportById=updateTransportById;
exports.addTransport=addTransport;