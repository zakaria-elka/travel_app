import { Button,Form} from "react-bootstrap";
import React,{Component,useRef} from "react";



const Input=(props)=>{

  const BudgetRef =useRef();
  const DestinationRef =useRef();
  const NumberPersonRef =useRef();


  const handleInfo=()=>{

    console.log("succes");
 
 
  }

    return (

 
        <Form>
          
        <Form.Group  className="mb-3" hidden={(props.filter==0)?false:true}>
          <Form.Label >Budget</Form.Label>
          <Form.Control type="number" min="500" placeholder="Enter Budget" ref={BudgetRef}/>

          
        </Form.Group>
        <Form.Group className="mb-3"  hidden={(props.filter==1)?false:true} >
          <Form.Label>Destination</Form.Label>
          <Form.Select aria-label="Default select example" ref={DestinationRef}>
              <option>Select Destination</option>
              <option value="Tanger">Tanger</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Fes">Fes</option>
            </Form.Select>
          
          
        </Form.Group>
        <Form.Group className="mb-3" hidden={(props.filter==2)?false:true}>
          <Form.Label>Number of Person</Form.Label>
          <Form.Control type="number" min="1" placeholder="Enter Person number" ref={NumberPersonRef} />
           
          
          
        </Form.Group>
        
      
        {(props.filter==2)?<Button variant="primary" onClick={handleInfo}>Search</Button>:null}
      </Form>


    )

}

export default Input