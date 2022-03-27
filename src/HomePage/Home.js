import React from 'react';
import NavBar from '../MainComponents/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../Auth/LoginForm';
import { Button } from 'react-bootstrap';
import "./Home.css"

const Home=()=>{
   
    return(

    <div className='homeapp'>
       <NavBar/>
      <div className='txt'>
        <p >Need Travel?</p>
        <pre>We are here to help you!</pre>

      </div>
      <React.Fragment >
      <Button className='btnExplore' variant='danger'  >Explore</Button>

      </React.Fragment>
    
    </div>

    )
}
export default Home