import React, { useState } from "react";
import { Navbar,Nav} from 'react-bootstrap';
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "../Auth/LoginForm";
import Home, { ButtonExplore } from "../HomePage/Home";
import { logout, useAuth } from "../firebase/fire";



const NavBar=()=>{

   const [state,setState]=useState(0);
   const currentUser = useAuth();
       
   async function  handleLogout(){

      await logout();
   }

   const showElement=()=>{

    setState(true);
  
   

   }

    return (
    
    <React.Fragment>
        <Navbar style={{background:"#2087fc"}} variant="dark">
     
      <Navbar.Brand className="mx-4">
        YesTravel
      </Navbar.Brand>
      <Nav>
          <Nav.Link to="products">Popular destinations</Nav.Link>
          <Nav.Link to="products">Who are we?</Nav.Link>
          <Nav.Link to="products">Privacy policy</Nav.Link>
  
          
{currentUser?.email? <input type="button" value="Log out" className="btn btn-danger" onClick={handleLogout} />
          :<input type="button" value="Login" className="btn btn-success" onClick={showElement}/>}
     
         
      </Nav>
     
  
    </Navbar>

    {state ? <LoginForm state={state} setState={setState} />:null}
    
    </React.Fragment>
    )

    

}



export default NavBar