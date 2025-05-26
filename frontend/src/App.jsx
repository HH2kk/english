import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Allclass from './pages/Allclass';
<<<<<<< Updated upstream
import FlashcardPage from './pages/Flashcardpage';
=======
>>>>>>> Stashed changes
import Class11 from './pages/Class11';
import Class22 from './pages/Class22';
import Class33 from './pages/Class33';
<<<<<<< Updated upstream
import LessonList from './pages/Lesson';

=======
import StudyTopics from './pages/StudyTopics';
import Study from './pages/Study';
import LoTrinh from './components/LoTrinh';
>>>>>>> Stashed changes
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
          <Route path="/trangchu" element={<Allclass />} />
          <Route path="/flashcard" element={<FlashcardPage />} />
          <Route path="/lesson" element={<LessonList />} />
=======
          <Route path="/fullclass" element={<Allclass />} />
          {/* lớp 1 */}
>>>>>>> Stashed changes
          <Route path="/lop1" element={<Class11 />} />
          <Route path="/tu-vung" element={<StudyTopics />} />
          <Route path="/hoc-tap" element={<Study />} />
          <Route path="/lo-trinh" element={<LoTrinh />} />
          {/* lớp 2 */}
          <Route path="/lop2" element={<Class22 />} />
          {/* lớp 3 */}
          <Route path="/lop3" element={<Class33 />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
