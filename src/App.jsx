import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './pages/Hero'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <>
    <Routes>
      <Route path='/' element={ <Hero /> } />
      <Route path='*' element={ <Hero /> } />
    </Routes>
    
    </>
  )
}

export default App
