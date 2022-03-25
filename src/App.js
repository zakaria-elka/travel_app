import { Navbar,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
       NeedTravel please
      </Navbar.Brand>
    </Container>
    </Navbar>
    
  );
}

export default App;
