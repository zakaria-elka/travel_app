import React, { useState } from "react";
import { Navbar,Nav} from 'react-bootstrap';
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";
import LoginForm from "../Auth/LoginForm";



const NavBar=()=>{

   const [state,setState]=useState(0);
   
       
    

    return (
    
    <React.Fragment>
        <Navbar bg="dark" variant="dark">
     
      <Navbar.Brand className="mx-4">
       Trovago
      </Navbar.Brand>
      <Nav>
          <Nav.Link to="products">Popular destinations</Nav.Link>
          <Nav.Link to="products">Who are we?</Nav.Link>
          <Nav.Link to="products">Privacy policy</Nav.Link>
  
          

          <input type="button" value="Sign in" className="btn btn-success" onClick={()=>setState(true)} />

      </Nav>
      
    </Navbar>
    {state ? <LoginForm state={state} setState={setState} />:null}
    </React.Fragment>
    )

    

}



export default NavBar