import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from 'react-bootstrap';
import Home from './Components/Home';
import FavList from './Components/FavList';
import {Routes , Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favlist' element={<FavList/>}> </Route>
    </Routes>
    </>
  );
}

export default App;


