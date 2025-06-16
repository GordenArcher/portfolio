import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect, useState } from 'react';
import Footer from './layouts/Footer';
import Nav from './layouts/Nav';
import Contact from './pages/Contact';
import NotFound from './pages/404';
import Home from './pages/Home';
import { About } from './pages/About';
import { PanelLeftClose } from 'lucide-react';
import Project from './pages/Project';
import Resume from './pages/Resume';
import { AnimatePresence, motion } from "framer-motion";
import AnimatedPage from './components/AnimatedPage'


function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const location = useLocation()

  useEffect(() => {
      setShowNav(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location])

    const openSide = useCallback(() => {
        setShowNav((prevState) => !prevState);
    }, []);

  return (
    <div className='w-full h-screen bg-slate-950 relative flex '>  
      <Nav showNav={showNav} />

      <div className='w-full flex flex-col justify-between bg-gray-900 rounded-l-2xl !mt-6 border-l-gray-600'>
        <main className="flex-1 !px-4 !py-6 overflow-y-auto">
          <div className="max-w-4xl w-full !mx-auto !py-20 !px-4 md:px-10">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
                <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
                <Route path="/projects" element={<AnimatedPage><Project /></AnimatedPage>} />
                <Route path="/resume" element={<AnimatedPage><Resume /></AnimatedPage>} />
                <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
                <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
              </Routes>
            </AnimatePresence>
          </div>
        </main>
        
        <Footer />
      </div>

      <div className='fixed z-90 right-[40px] bottom-[80px] md:hidden'>
        <button onClick={openSide} className='w-12 h-12 rounded-full border bg-slate-950 flex items-center justify-center'>
          <PanelLeftClose size={20} className='text-gray-100' />
        </button>
      </div>
    </div>
  )
}

export default App
