import React, { Component, useState,useEffect, useRef, createRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useAuth } from "../firebase/fire";
import Vnav from "../navCompo/Vnav";
import Title from "../navCompo/title";
import GetOffer, { DataCard } from "./getoffer";



const CustomPage=()=>{
        
   
   
return(

<div>
<Vnav setelement={"custom"}/>
<DataCard/>
<Title />
<GetOffer/>
</div>


)
    
   



}



export default CustomPage