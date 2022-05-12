import React, { Component, useState,useEffect, useRef, createRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useAuth } from "../firebase/fire";

import './getoffer.css'
import { Carousel,Card, Button } from "react-bootstrap";





   

const url= new URLSearchParams(window.location.search)
const city=url.get('city');
const depart=url.get('depart');
const budget=url.get('budget');
const nuits=url.get("nuits");


var sethotelId;
var setrestoId;
var settransId;

const GetOffer=()=>{
        

 const [results,setResults]=useState({})       
 useEffect(()=>{

    axios({
        method: "get",
        url: "http://localhost:5000/api/packs/pref/"+depart+"/"+city,

      })
            .then((res)=>setResults(res.data))
            .then(console.log(results))

  



 },[])  
   

 const validhotel=(i,j)=>{

  var price=document.getElementById(i+"Hprice"+j).innerHTML.slice(0,-3)

 document.getElementById("setHotelName").innerHTML= document.getElementById(i+"hotelName"+j).innerHTML
 document.getElementById("budget").innerHTML-=price*nuits
 sethotelId=document.getElementById(i+"hotelid"+j).innerHTML;

 }

  const validresto=(i,j)=>{

 
  var price=parseInt(document.getElementById(i+"Rprice"+j).innerHTML.substring(0,2))+
  parseInt(document.getElementById(i+"Rprice"+j).innerHTML.substring(3,6))

  document.getElementById("setrestoName").innerHTML= document.getElementById(i+"restoName"+j).innerHTML
  document.getElementById("budget").innerHTML-=(price/2)*nuits
  setrestoId= document.getElementById(i+"restoid"+j).innerHTML;
 
  }

 const validtrans=(i,j)=>{

 
    var price=document.getElementById(i+"Tprice"+j).innerHTML.slice(0,-3)

    document.getElementById("settransportName").innerHTML= document.getElementById(i+"transportName"+j).innerHTML
    document.getElementById("budget").innerHTML-=price*nuits
    settransId=document.getElementById(i+"transportid"+j).innerHTML;
   
    }







 
return(

<div className="customoffer">

{(Object.keys(results).length > 0)  && [0,1,2].map((i)=>(
<Carousel fade variant="dark" className="showcustom" >
{(i==0) &&
results.hotels.slice(0,5).map((data,j) =>(    
<Carousel.Item style={{display:"flex",paddingLeft:"25%",width:"80%"}} interval={5000}>
<img className="img2" src={"http://localhost:5000/api/hotels/image/"+data.name} />        
        <div style={{width:"30%",flex:5}}>
        <h2 hidden id={i+"hotelid"+j}>{data._id}</h2>  
        <h5 id={i+"hotelName"+j}>Hotel {data.name}</h5>
        <p style={{fontSize:"12px"}}>Adress : {data.adress}</p>
        <h6 id={i+"Hprice"+j} style={{color:"red",paddingLeft:"60%"}}>{data.prix}Dhs</h6>
        <i onClick={()=>{validhotel(i,j)}} style={{paddingLeft:"60%",fontSize:"20px"}} class="lni lni-heart" />
        </div>
</Carousel.Item>

))
}
{(i==1) &&
results.resto.slice(0,5).map((data,j1) =>(    
<Carousel.Item style={{display:"flex",paddingLeft:"25%",width:"80%"}} interval={5000}>
<img className="img2" src={"http://localhost:5000/api/hotels/image/res"+data.name} />       
         <div style={{width:"40%",flex:5}}>
         <h2 hidden id={i+"restoid"+j1}>{data._id}</h2>
         <h6  id={i+"restoName"+j1}>Restaurant {data.name}</h6>
         <p style={{fontSize:"12px"}}>Adress : {data.adress}</p>
         <h6 id={i+"Rprice"+j1}  style={{color:"red",paddingLeft:"50%"}}>{data.prix}Dhs</h6>
         <i onClick={()=>validresto(i,j1)} style={{paddingLeft:"60%",fontSize:"20px"}} class="lni lni-heart" />
        </div>
</Carousel.Item>

))
}
{(i==2) &&
results.transports.slice(0,5).map((data,j2) =>(    
<Carousel.Item style={{textAlign:"center"}} interval={5000}>   
         <h2 hidden id={i+"transportid"+j2}>{data._id}</h2>
         <h4>Transport    <i onClick={()=>validtrans(i,j2)}  style={{paddingLeft:"20px",fontSize:"20px",color:"black"}} class="lni lni-heart" /></h4>
        <h5 id={i+"transportName"+j2} style={{color:"darkblue"}}>Type: {data.name}</h5>
        <h5 style={{color:"darkblue"}}>Depart Point: {data.departplace}</h5>
        <h5 style={{color:"darkblue"}}>Travel Duration: {data.duration}</h5>
        <h6  id={i+"Tprice"+j2} style={{color:"red"}}>{data.prix}Dhs
        </h6>
     
</Carousel.Item>

))
}
</Carousel>
))
}
</div>


)
    
   



}
///////////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////
export const DataCard=()=>{

  const currentUser=useAuth();
  async function validoffer(){

    if(document.getElementById("budget").innerHTML<=0){
      alert("budget insuffisent");
     
    }
    else{
    await axios.post('http://localhost:5000/api/packs/fav', {'userid':currentUser.email,'hotelid':sethotelId,'restoid':setrestoId,'transportid':settransId})
    window.location.reload(false);   
  }
}  
  

   const canceloffer=()=>{

    window.location.reload(false);

   }


return(

<Card className="dataCard">
  <Card.Header style={{display:"flex"}}>
  <h4>Budget </h4>   
  <h4 id="budget" style={{paddingLeft:"20%",color:"red"}}>{budget}</h4>     
  </Card.Header>      
  <Card.Body >
    <form>
     <h4>Selected Item</h4><br></br>     
    <label style={{color:"darkcyan"}}>Hotel selected</label>
    <h6 id="setHotelName"></h6>
    <label style={{color:"darkcyan"}}>Restaurant selected</label>
    <h6 id="setrestoName"></h6>
    <label style={{color:"darkcyan"}}>Transport selected</label>
    <h6 id="settransportName"></h6>
  
    <Button onClick={()=>validoffer()}>Confirm</Button>
    
    </form>
    <Button variant="danger" style={{marginTop:"20px"}} onClick={()=>canceloffer()}>Cancel</Button>
  </Card.Body>
</Card>
)


}



export default GetOffer