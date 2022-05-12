import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './title.css';
import { useAuth } from "../firebase/fire";



const Title=()=>{


const currentUser=useAuth();
const [show,setShow]=useState(0);

return(
   <div className="title" >
       
  {show?
 <i  onClick={()=>setShow(0)} >{currentUser.email}</i> :<i class="lni lni-user" onClick={()=>setShow(1)} ></i>}
  
  

   </div>


)






}

export default Title