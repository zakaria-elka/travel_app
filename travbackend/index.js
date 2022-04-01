const express=require("express")
const bodyParser=require("body-parser")
const app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send("from the root ")
})
app.get('/api/hotels',(req,res)=>{
    res.send([{nom:"hyat regency", ville:"casablanca",quartier:"anfa"},{nom:"sofitel", ville:"marrakech",quartier:"hivernage"}])
})
app.get('/api/hotels/:ville/:quartier',(req,res)=>{
    res.send([{nom:"hyat regency", ville:"casablanca",quartier:"anfa"},{nom:"sofitel", ville:"marrakech",quartier:"hivernage"},{param1:req.params.ville,param2:req.params.quartier}])
})
app.post('/api/admin/hotel/add',(req,res)=>{
    
    if(req.body.hotel.length<3){
    res.status(404).send("sorry the value isnt valid")
return}
    res.send({count:5,name:req.body.hotel})

})
app.delete('/api/admin/hotels/delete/:id',(req,res)=>{
    res.send(JSON.stringify("done"))
})
app.listen(3000,()=>{console.log("kitsenet")})