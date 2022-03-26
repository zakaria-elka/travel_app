import React from "react";
import { Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar=()=>{
    return <React.Fragment>
        <Navbar bg="dark" variant="dark">
     
      <Navbar.Brand href="#home">
       Trovago
      </Navbar.Brand>
      <Nav>
          <Nav.Link to="products">Poular destinations</Nav.Link>
          <Nav.Link to="products">Who are we?</Nav.Link>
          <Nav.Link to="products">Privacy policy</Nav.Link>
          <Nav.Link to="products">Poular destinations</Nav.Link>
          
          <Nav.Link to="products" className="btn btn-success mx-2 right-align" style={{color:"white"}}> Sign up</Nav.Link>
          <Nav.Link to="products" className="btn btn-primary" style={{color:"white"}}> Sign in</Nav.Link>
          

      </Nav>
    
    </Navbar>

    </React.Fragment>
}
export default NavBar