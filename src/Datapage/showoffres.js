import React, { Component, useState,useEffect, useRef, createRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button } from 'react-bootstrap';
import './showoffres.css'
import axios from "axios";
import { useAuth } from "../firebase/fire";


const url= new URLSearchParams(window.location.search)
const budget=url.get('budget');
const city=url.get('city');
const nuits=url.get('nuits');
const depart=url.get('depart');


const Showoffres=()=>{
        
    const currentUser=useAuth();
    const [saved,setSaved]=useState({
      id:null
    });

    const [confirm,setConfirme]=useState(0);

    
   


    async function handleData(i){
    
    
    let hotel=document.getElementById("hotelid"+i).innerHTML;

    var qs = require('qs');

    await axios.post('https://webhook.site/5e13de9c-7ddf-41aa-9152-3d6fc214ca52', 
    qs.stringify({'hoteId':hotel,'restoId':123}
    
    
    ))
 
     
   

  

}


    const [results,setResults]=useState({})    
           
    useEffect(()=>{
                
       
        axios({
            method: "get",
            url: "http://localhost:5000/api/packs/search/"+budget +"/"+ city+"/"+nuits+"/"+depart,

          })
                .then((res)=>setResults(res.data))
                .then(console.log(results))
                
                
              
                
               
            
            
            
            })


return(
<div className="offrediv" >

         
         
<div className="jumbotron" >
{(Object.keys(results).length > 0)  &&
[0,1,2].map((i)=>(
<form className="cardData"  >      

   

        <div className="divdata">
        {results.hotels.slice(i,i+1).map((data) =>( 
        <div style={{display:"flex"}}>
        <img className="img" src={"http://localhost:5000/api/hotels/image/"+data.name} />        
        <div style={{width:"30%",flex:5}}>
        <h2 hidden id={"hotelid"+i}>{data._id}</h2>  
        <h5>Hotel {data.name}</h5>
        <p style={{fontSize:"12px"}}>Adress : {data.adress}</p>
        <h6 style={{color:"red",paddingLeft:"60%"}}>{data.prix}Dhs</h6>
        </div>
      

        </div>
        
         ))}   
         
        </div>
        <div className="divdata">
        {results.hotels.slice(i,i+1).map((data) =>( 
        <p></p>
        
         ))}   
         
        </div>
        <div className="divdata">
        {results.hotels.slice(i,i+1).map((data) =>( 
        <p></p>
        
         ))}   
         
        </div>

        
    

       
        <div className="divdata"  style={{height:"5%",padding:"5px 50%"}}>
        {(saved.id===i)?<i class="lni lni-heart-filled"  />:<i class="lni lni-heart"
        hidden={confirm} onClick={()=>{handleData(i); 
          setSaved({save:true,id:i});setConfirme(1) }} />}
        </div>
        
       
     
        
      


</form>    
))
}       
         

</div>       
        

     


</div>
);

}

/*
()=>{handleData(i); 
          setSaved({save:true,id:i}) }

  <div className="divdata"> 
        {results.transports.slice(0,3).map((data,i) =>( 
          <div style={{display:"flex"}}>
          <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX52OkyDTjM_ajum4VyqUhnHXEYS9K4bHgYg&usqp=CAU"/>        
          <div>
          <h5>{data.name}</h5>
          <h6>adress: {data.adress}</h6>
          <h6>price: {data.prix}</h6>
          </div>
        </div>
         ))}   
         
        </div>
        <div className="divdata"> <p > hna dir restaurant </p>
        {results.restos.slice(0,3).map((data,i) =>( 
          <div style={{display:"flex"}}>
          <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX52OkyDTjM_ajum4VyqUhnHXEYS9K4bHgYg&usqp=CAU"/>        
          <div>
          <h5>{data.name}</h5>
          <h6>adress: {data.adress}</h6>
          <h6>price: {data.prix}</h6>
          </div>
        </div>
         ))}   
         
        </div> 


*/



export default Showoffres