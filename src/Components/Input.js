import { Button,Form} from "react-bootstrap";
import React,{Component,useRef} from "react";



const Input=(props)=>{

  const BudgetRef =useRef();
  const DestinationRef =useRef();
  const DepartPlaceRef =useRef();
  const NumberNightRef =useRef();

  
  async function handleInfo(){
 
    if(BudgetRef.current.value>=500 && NumberNightRef.current.value>=1){

    var state={

      budget: BudgetRef.current.value,
      city: DestinationRef.current.value,
      DepartPlace:DepartPlaceRef.current.value,
      nuits: NumberNightRef.current.value,
  
    }
  

  
      setTimeout(() => {
        window.location.href='../data?budget='+state.budget+'&city'+state.city+'&nuits'+state.nuits;
      }, 2000)


    
  }else{
    alert("Error")
  }
 
  }

    return (

 
        <Form>
          
        <Form.Group  className="mb-3" hidden={(props.filter==0)?false:true}>
          <Form.Label >Budget</Form.Label>
          <Form.Control type="number" min="500" placeholder="Enter Budget" ref={BudgetRef}/>

          
        </Form.Group>

        
        <Form.Group className="mb-3"  hidden={(props.filter==1)?false:true} >
          <Form.Label>Depart place</Form.Label>
          <Form.Select aria-label="Default select example" ref={DepartPlaceRef}>
              <option>Select Depart place</option>
              <option value="tanger">Tanger</option>
              <option value="marrakech">Marrakech</option>
              <option value="casablanca">Casablanca</option>
            </Form.Select>
            
          
          
        </Form.Group>
        <Form.Group className="mb-3"  hidden={(props.filter==1)?false:true} >
          <Form.Label>Destination</Form.Label>
          <Form.Select aria-label="Default select example" ref={DestinationRef}>
              <option>Select Destination</option>
              <option value="tanger">Tanger</option>
              <option value="marrakech">Marrakech</option>
              <option value="casablanca">Casablanca</option>
            </Form.Select>
            
          
          
        </Form.Group>



        <Form.Group className="mb-3" hidden={(props.filter==2)?false:true}>
          <Form.Label>How Many Nights?</Form.Label>
          <Form.Control type="number" min="1" max="10" placeholder="Enter Number of Nights" ref={NumberNightRef} />
           
          
          
        </Form.Group>

        

        
        
      
        {(props.filter==2)?<Button variant="primary" onClick={handleInfo}>Search</Button>:null}
      </Form>


    )

}

export default Input