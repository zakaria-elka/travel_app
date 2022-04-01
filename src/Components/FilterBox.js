import React, { Component,useState,useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal } from 'react-bootstrap';
import Input from "./Input";


const FilterBox=(props)=>{

   
   
    const close=()=>{

      props.setClose(false)
    }
 
    const [filter,setFilter]=useState('');

    const handleNext=()=>{

    
    setFilter(parseInt(filter+1));
    }
      
    const handlePrevious=()=>{

     
      setFilter(parseInt(filter-1));

      }
   
        return(
<Modal show={props.show} onHide={close} style={{paddingTop:"100px",backgroundColor:"black"}} >
          <Modal.Header closeButton>
            <Modal.Title>Set Your Preference</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         
         <Input filter={filter} setFilter={setFilter} />

          </Modal.Body>
          <Modal.Footer>
         
            
            <Button variant="success" disabled={(filter==2)?true:false} style={{position:"absolute"}} onClick={handleNext}>Next</Button>
            <Button variant="warning" disabled={(filter==0)?true:false} style={{position:"static",marginRight:"82%"}} onClick={handlePrevious}>Previous</Button>
      
             
          </Modal.Footer>
        </Modal>
    


        )
    
}



export default FilterBox