import { Navbar,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BudgetBox from './Components/BudgetBox';
import React from 'react';
function App() {
  return (
<div>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
       NeedTravel please
      </Navbar.Brand>
    </Container>
    </Navbar>
    <BudgetBox/>
    </div>
    
  );
}

export default App;
