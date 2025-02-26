import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Loader from './components/Loader';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []); 

  return (
    <>
      {isLoading ? (
        <div className="loader w-full h-screen top-0 left-0 flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )}
    </>
  );
};

createRoot(document.getElementById('Gorden')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
