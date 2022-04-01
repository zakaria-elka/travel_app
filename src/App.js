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
  <Route path="/filterbox" exact element={<FilterBox />}/>
 
 

</Routes>

 </BrowserRouter> 

  </React.Fragment>
    
    
  );
}

export default App;
