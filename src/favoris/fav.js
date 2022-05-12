import React, { Component, useState,useEffect, useRef, createRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useAuth } from "../firebase/fire";
import Vnav from "../navCompo/Vnav";
import Title from "../navCompo/title";
import Gatfav from "./getfav";




const Fav=()=>{
        
   
   
return(

<div>
<Vnav setelement={"fav"}/>
<Title />
<Gatfav/>
</div>


)
    
   



}



export default Fav