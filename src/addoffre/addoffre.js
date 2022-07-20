import React, { Component, useState,useEffect, useRef, createRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useAuth } from "../firebase/fire";
import Vnav from "../navCompo/Vnav";
import Title from "../navCompo/title";
import Putoffre from "./putoffre";




const Add=()=>{
        
   
   
return(

<div>
<Vnav setelement={"fav"}/>
<Title />
<Putoffre />
</div>


)
    
   



}



export default Add