import React,{useState , useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,FormGroup,FormControl,Modal } from 'react-bootstrap';
import {signUp, login} from '../firebase/fire';




const LoginForm=(props)=>{
    
  const [form,setform]=useState(0);

  
  
   const close=()=>{

    props.setState(false);
    
   }

 
          
  
  
  



    return(

    <div className='loginform' >
    <Modal show={props.state} onHide={close} >
          <Modal.Header closeButton>
            <Modal.Title>{form ? <text>Sign In</text>:<text>Sign Up</text>}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {form ? <Logform  setState={props.setState}
    />:<Registerform setState={props.setState}

  />}

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" style={{marginLeft:"50px"}} onClick={()=>setform(!form)}>
              {form ? <text>Sign Up</text>:<text>sign In</text>}
            </Button>
          </Modal.Footer>
        </Modal>
    

    </div>

    )



  
}


const Registerform=(props)=>{

 
  const emailRef =useRef();
  const passwordRef =useRef();


  const close=()=>{

    props.setState(false);
    
   }

  async function handleSignup(){
    try{
     await signUp(emailRef.current.value,passwordRef.current.value)
    }catch(err){

      alert(err.code);
    }
  }

  return(

    <Form>
     

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" ref={emailRef}
    
      />
      
      
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" ref={passwordRef}
       
      />
    </Form.Group>
    
    <Button  variant="primary"  onClick={()=>{handleSignup(); close();}} style={{position:"relative",marginRight:"84%"}} >
      Submit
    </Button>
  </Form>


  )



 }


const Logform=(props)=>{
  
  
  const emailRef =useRef();
  const passwordRef =useRef();

  const close=()=>{

    props.setState(false);
    
   }

  async function handleLogin(){
    try{
      await login(emailRef.current.value,passwordRef.current.value)
     }catch(err){
 
       alert(err.code);
     }
  }


  return(

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" ref={emailRef}
    />
   
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" ref={passwordRef}
  />
  
    </Form.Group>
    
    <Button  variant="primary" onClick={()=>{handleLogin(); close();}} style={{position:"relative",marginRight:"84%"}} >
      Submit
    </Button>
  </Form>


  )



 }




 
export default LoginForm