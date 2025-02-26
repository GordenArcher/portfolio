import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './pages/Hero'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Footer from './components/page/Footer';
import Nav from './components/page/Nav';
import Contact from './pages/Contact';

function App() {

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <>  
    <div className="w-full" id="home">
      <Nav />
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
