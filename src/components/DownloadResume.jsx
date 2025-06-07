import { Download } from 'lucide-react';
import styled from 'styled-components';

const DownloadResume = () => {
  return (
    <StyledWrapper>
      <a href='/Gorden_Resume.pdf' download className="!font-extrabold">
        <button className="button cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 text-white !px-5 !py-2 rounded-2xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
           <Download />
        </button>
      </a>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .button {
   --color: #0a0415;
   padding: 0.8em 1.5em;
   background-color: transparent;
   border-radius: .3em;
   position: relative;
   overflow: hidden;
   cursor: pointer;
   transition: .5s;
   font-weight: 400;
   font-size: 17px;
   border: 1px solid none;
   font-family: inherit;
   text-transform: uppercase;
   color: var(--color);
   z-index: 1;
  }

  .button::before, .button::after {
   content: '';
   display: block;
   width: 50px;
   height: 50px;
   transform: translate(-50%, -50%);
   position: absolute;
   border-radius: 50%;
   z-index: -1;
   background-color: var(--color);
   transition: 1s ease;
  }

  .button::before {
   top: -1em;
   left: -1em;
  }

  .button::after {
   left: calc(100% + 1em);
   top: calc(100% + 1em);
  }

  .button:hover::before, .button:hover::after {
   height: 410px;
   width: 410px;
  }

  .button:hover {
   color: #fff;
  }

  .button:active {
   filter: brightness(.8);
  }`;


export default DownloadResume