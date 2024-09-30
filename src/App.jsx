// App.jsx
import { useState } from 'react';
import Cursor from './Components/hy/Cursor'; 
import Home from './Pages/Home/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cursor /> 
      <Home />
   \
    </>
  );
}

export default App;
