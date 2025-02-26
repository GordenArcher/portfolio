import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

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
        <div className="loader">Loading...</div>
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
