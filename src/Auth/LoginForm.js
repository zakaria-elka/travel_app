import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,FormGroup,FormControl,Modal } from 'react-bootstrap';



const LoginForm=(props)=>{
    
    
   const close=()=>{
 
    props.setState(false);

   }

    return(

    <div className='loginform' >
    <Modal show={props.state} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button  variant="primary" type="submit" style={{marginRight:"84%"}}>
    Submit
  </Button>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    

    </div>

    )
  
}




export default LoginForm