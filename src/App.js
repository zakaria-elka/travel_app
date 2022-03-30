import './App.css';
import React from 'react';
import FilterBox from './Components/FilterBox'
 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './HomePage/Home';
 
function App() {
  return (
<React.Fragment>

<BrowserRouter>

<Routes>

  <Route path="/" element={<Home/> }/>
  <Route path="/filterbox" exact element={<div><Home/><FilterBox/></div> }/>
  <Route path="/filterboxo" exact element={<div><Home/><FilterBox/>boxo</div> }/>
 

</Routes>

 </BrowserRouter> 

  </React.Fragment>
    
    
  );
}

export default App;
