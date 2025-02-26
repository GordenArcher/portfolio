import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './pages/Hero'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Footer from './components/page/Footer';
import Nav from './components/page/Nav';
import Contact from './pages/Contact';

function App() {
  const [showNav, setShowNav] = useState(false);

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);


  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>  
    <div className={` w-full`} id="home">
      <Nav showNav={showNav} />
    </div>

    <Routes>
      <Route path='/' element={ <Hero /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='*' element={ <Hero /> } />
    </Routes>

    <Footer />
    </>
  )
}

export default App
