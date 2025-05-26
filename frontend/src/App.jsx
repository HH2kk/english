import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Allclass from './pages/Allclass';
import FlashcardPage from './pages/Flashcardpage';
import Class11 from './pages/Class11';
import Class22 from './pages/Class22'; 
import Class33 from './pages/Class33';
import LessonList from './pages/Lesson';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trangchu" element={<Allclass />} />
          <Route path="/flashcard" element={<FlashcardPage />} />
          <Route path="/lesson" element={<LessonList />} />
          <Route path="/lop1" element={<Class11 />} />
          <Route path="/lop2" element={<Class22 />} /> 
          <Route path="/lop3" element={<Class33 />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
