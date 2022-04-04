import React, { useState } from 'react';
import NavBar from '../MainComponents/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../Auth/LoginForm';
import FilterBox from '../Components/FilterBox';
import { Button } from 'react-bootstrap';
import "./Home.css"
import { useAuth } from '../firebase/fire';

const Home=()=>{
   
  
 
    return(

    <div className='homeapp'>
       <NavBar/>
      <div className='txt'>
        <p >Need Travel?</p>
        <pre>We are here to help you!</pre>

      </div>
      <React.Fragment >
      <ButtonExplore />
      </React.Fragment>
      
      

    </div>

    )
}


export function ButtonExplore(){
  const [show,setClose]=useState(0);
  const user=useAuth();

 
     

return(
<div>
 
 <Button className='btnExplore' variant='danger'  onClick={()=>setClose(!show)}>Explore</Button>
 {(show && user?.email) ?<FilterBox show={show} setClose={setClose} />:<LoginForm state={show} setState={setClose} />}
 
</div>
)

}



export default Home