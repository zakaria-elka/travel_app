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
import CustomPage from './CustomPage/CustomPage';
import Fav from './favoris/fav';
import Add from './addoffre/addoffre';

 
function App() {
  return (
<React.Fragment>

<BrowserRouter>

<Routes>

  <Route path="/" element={<Home/> }/>
  <Route path="/filterbox" exact element={<FilterBox />}/>
  <Route path="/data" exact element={<Data />}  />
  <Route path="/custom" exact element={<CustomPage />}  />
  <Route path="/fav" exact element={<Fav/>}  />
  <Route path="/add" exact element={<Add/>}  />
 

</Routes>

 </BrowserRouter> 

  </React.Fragment>
    
    
  );
}

export default App;
