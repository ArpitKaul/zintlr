import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Cursor from './Components/cursor/Cursor';
import Home from './Pages/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus';
import Navbar from './Components/Navbar/Navbar';
import Clndr from './Components/Calendar/Clndr';
import Footer from './Pages/Footer/Footer';
import Data from './Pages/OurData/Data';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Clndr/>
          <Navbar />
          <Cursor /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/Data' element={<Data />} />
            <Route path='./Login' element={<Login/>}/>

          </Routes>
          <Footer/>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
