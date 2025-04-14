import './styles/main.css';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Preloader from './components/Preloader/preloader';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import CustomCursor from './components/Cursor/cursor';

// ⬇️ Импорт для сброса скролла при переходе
import ScrollReset from './utils/scrollToTop';

// ⬇️ Импорт стрелки вверх
import ScrollToTop from './utils//scrollToTop';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './i18n';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <Router>
        <CustomCursor />
        <ScrollReset />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
