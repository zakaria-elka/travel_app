import React, { Component, useState,useEffect, useRef, createRef } from "react";
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useAuth } from "../firebase/fire";
import './getfav.css'


const url= new URLSearchParams(window.location.search)
const user=url.get('user');

const Gatfav=()=>{
        
 
  const [results,setResults]=useState({})       
 useEffect(()=>{

    axios({
        method: "get",
        url: "http://localhost:5000/api/packs/mypacks/"+user,

      })
            .then((res)=>setResults(res.data))
            .then(console.log(results))

  



 },[])  
   
return(

<div className="favdiv">
{(Object.keys(results).length > 0)  &&  results.mypacks.map((data,i)=>(
  <Card style={{marginRight:"10px"}}>
  <Card.Body>
    <div style={{display:"flex"}}>
        <img className="img2" src={"http://localhost:5000/api/hotels/image/"+data.hotelId.name} />        
        <div style={{width:"30%",flex:5}}>
        <h5>Hotel {data.hotelId.name}</h5>
        <p style={{fontSize:"12px"}}>Adress : {data.hotelId.adress}</p>
        <h6 style={{color:"red",paddingLeft:"60%"}}>{data.hotelId.prix}Dhs</h6>
       </div>
    </div> 
    <div style={{display:"flex"}}>
        <img className="img2" src={"http://localhost:5000/api/hotels/image/res"+data.foodId.name} />        
        <div style={{width:"30%",flex:5}}>
        <h5>Hotel {data.foodId.name}</h5>
        <p style={{fontSize:"12px"}}>Adress : {data.foodId.adress}</p>
        <h6 style={{color:"red",paddingLeft:"60%"}}>{data.foodId.prix}Dhs</h6>
       </div>
    </div>  
    <div style={{textAlign:"center"}}>    
        <div style={{width:"100%",flex:5}}>
        <h4>Transport</h4>
        <h5 style={{color:"darkblue"}}>Type: {data.transportId.name}</h5>
        <h5 style={{color:"darkblue"}}>Travel Duration: {data.transportId.duration}</h5>
        <h5 style={{color:"darkblue"}}>Depart Point: {data.transportId.departplace}</h5>
        <h6 style={{color:"red"}}>{data.transportId.prix}Dhs</h6>
       </div>
    </div>    
  </Card.Body>
</Card>


))

}
</div>


)
    
   



}



export default Gatfav