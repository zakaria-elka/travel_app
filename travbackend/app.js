const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const HttpError=require("./modules/http-error")
const hotelsroutes=require('./routes/hotelsroutes')
const restaurantsroutes=require('./routes/restaurantsroutes')
const transportsroutes=require('./routes/transportroutes')

const app=express();

app.use(bodyParser.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods','POST, GET, PATCH, DELETE');
       next();
   });
app.use('/api/hotels',hotelsroutes)
app.use('api/restaurants',restaurantsroutes)
app.use('api/transports',transportsroutes)
app.use((req,res,next)=>{
    const error=new HttpError('couldnt find this route',404);
});

app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code ||500);
    res.json({message:error.message ||'unkown error '});
})

// demarer le server apres auth de mongodb 
mongoose.connect('mongodb+srv://zakaria-elk:HEYHEYmongo@travelapp.tcd2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>{app.listen(5000);console.log("connected") }).catch(err=>{console.log(err)});
//app.listen(5000);