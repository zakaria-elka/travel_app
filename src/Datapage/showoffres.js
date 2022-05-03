import React, { Component, useState,useEffect, useRef, createRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button } from 'react-bootstrap';
import './showoffres.css'
import axios from "axios";


const url= new URLSearchParams(window.location.search)
const budget=url.get('budget');
const city=url.get('city');
const nuits=url.get('nuits');


const Showoffres=()=>{
        
    const [saved,setSaved]=useState({
      id:null
    });

    const [confirm,setConfirme]=useState(0);

    const handleData=(i)=>{

    
    alert(document.getElementById(i).innerHTML+"  "+document.getElementById("prix"+i).innerHTML);

    }


    const [results,setResults]=useState({})    
           
    useEffect(()=>{
                
       
        axios({
            method: "get",
            url: "http://localhost:5000/api/packs/search/"+budget +"/"+ city+"/"+nuits,

          })
                .then((res)=>setResults(res.data))
                
                
              
                
               
            
            
            
            })


return(
<div className="offrediv" >

         
         
<div className="jumbotron" >
{ (Object.keys(results).length > 0)  &&
[0,1,2].map((i)=>(
<form className="cardData"  >      

   

        <div className="divdata">
        {results.hotels.slice(i,i+1).map((data) =>( 
        <div style={{display:"flex"}}>
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX52OkyDTjM_ajum4VyqUhnHXEYS9K4bHgYg&usqp=CAU"/>        
        <div style={{width:"30%",flex:5}}>
        <h5 id={i} >{data.name}</h5>
        <label >Adress</label>
        <h6> {data.adress}</h6>
        <h6 id={"prix"+i}>{data.prix}Dhs</h6>
        </div>
        </div>
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