import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Allclass from './pages/Allclass';
import Class11 from './pages/Class11';
import Class22 from './pages/Class22';
import Class33 from './pages/Class33';
import StudyTopics from './pages/StudyTopics';
import Study from './pages/Study';
import LoTrinh from './components/LoTrinh';
import PagePass1 from './pages/PagePass1';
import Level1 from './components/Level1';
import Level2 from './Level-class1/Level2';
import TopicHello from './Topic1/TopicHello';
import LoginRegisterForm from './components/LoginFrom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullclass" element={<Allclass />} />
          <Route path="/lop1" element={<Class11 />} />
          <Route path="/tu-vung" element={<StudyTopics />} />
          <Route path="/hoc-tap" element={<Study />} />
          <Route path="/lo-trinh" element={<LoTrinh />} />
          <Route path="/lop2" element={<Class22 />} />
          <Route path="/lop3" element={<Class33 />} />
          <Route path="/ai1" element={<PagePass1 />} />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/xinchao" element={<TopicHello />} />
          <Route path="/dang-nhap" element={<LoginRegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
