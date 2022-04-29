import './App.css';
import { Col, Container, Row } from "reactstrap"
import { ToastContainer} from "react-toastify"
import Home from './Components/Home';
import Header from './Components/Header'
import Allcourses from './Components/Allcourses';
import AddCourse from './Components/AddCourse';
import Menu from './Components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
    <div>
    <ToastContainer />

      <Container>
        <Header />

        <Row>
          <Col md={4}>
            <Menu />
            

          </Col>
          <Col md={8}>

          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add-course' element={<AddCourse/>} />
          <Route path='/view-courses' element={<Allcourses/>} />
          

        </Routes>



          </Col>
        </Row>
      </Container>
    </div>
    </Router>
  );
}

export default App;
