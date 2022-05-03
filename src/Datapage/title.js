import React, { useState } from "react";
import { Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './title.css';
import { useAuth } from "../firebase/fire";



const Title=()=>{

const [show,setShow]=useState(0);
const currentUser=useAuth();

return(
   <div className="title" >
         <h2 style={{color:"white",flex:"1"}}>YesTravel</h2>
         {show?<h2 className="email"  style={{color:"white",fontSize:"20px",paddingRight:"12px",paddingTop:"13px"}}
         >{currentUser.email}</h2>:null}
         <h2 className="Usericon" onMouseOver={()=>setShow(1)} onMouseLeave={()=>setShow(0)}>  <i class="lni lni-user" style={{color:"white",flex:"2"}}></i></h2>
   </div>


)






}

export default Title