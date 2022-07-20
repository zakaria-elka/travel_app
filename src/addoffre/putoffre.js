import React, { Component, useState,useEffect, useRef, createRef } from "react";
import { Card,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './putoffre.css'


const url= new URLSearchParams(window.location.search)
const user=url.get('user');

const Putoffre=()=>{
        
 
 
   
return(

<div className="putdiv">
{[1,2,3].map((i)=>(
  <Card className="divputcard" style={{marginRight:"10px"}}>
  <Card.Body>
  {(i!=3)?
  <Form>
  {(i==1)?<h2>Add Hotel</h2>:<h2>Add Restaurant</h2>}
  <br></br>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="City" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Adress</Form.Label>
    <Form.Control type="text" placeholder="Adress" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Price" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Add image</Form.Label>
    <Form.Control type="file"  />
  </Form.Group>

  <Button variant="primary" type="submit">
    Add
  </Button>
</Form>:<Form>
  <h2>Add Transport</h2>
  <br></br>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Type</Form.Label>
    <Form.Control type="text" placeholder="Type" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Depart City</Form.Label>
    <Form.Control type="text" placeholder="Depart Place" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Destination</Form.Label>
    <Form.Control type="text" placeholder="Destination" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Travel Duration</Form.Label>
    <Form.Control type="text" placeholder="Duration" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Depart Place</Form.Label>
    <Form.Control type="text" placeholder="Duration" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Price" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Add
  </Button>
</Form>



}
    
  </Card.Body>
</Card>


))

}
</div>


)
    
   



}



export default Putoffre