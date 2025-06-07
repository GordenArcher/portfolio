import { lazy, StrictMode, Suspense} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
const App = lazy(() => import('./App'))
import Loader from './components/Loader';

const Main = () => {

  

  return (
    <>
    <BrowserRouter>
      <Suspense fallback={
        <div className="loader w-full h-screen top-0 left-0 flex items-center justify-center">
          <Loader />
        </div>
      }>
        <App />
      </Suspense>
    </BrowserRouter>
    </>
  );
};

createRoot(document.getElementById('Gorden')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
