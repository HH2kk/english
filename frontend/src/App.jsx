import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Mainmenu from './components/Mainmenu';
import Class11 from './pages/Class11';
import Class22 from './pages/Class22'; 
import Class33 from './pages/Class33';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/lop1" element={<Mainmenu />} /> */}
          <Route path="/lop1" element={<Class11 />} />
          <Route path="/lop2" element={<Class22 />} /> 
          <Route path="/lop3" element={<Class33 />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
