import './App.css';
import React from 'react';
import FilterBox from './Components/FilterBox'
import Data from './Datapage/data';
 
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
  <Route path="/data" exact element={<Data />}  />
 
 

</Routes>

 </BrowserRouter> 

  </React.Fragment>
    
    
  );
}

export default App;
