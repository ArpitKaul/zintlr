import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Cursor from './Components/cursor/Cursor';
import Home from './Pages/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus';
import Navbar from './Components/Navbar/Navbar';
import Pitch from './Pages/pitch/Pitch';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Cursor /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<Aboutus />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
