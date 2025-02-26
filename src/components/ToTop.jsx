import styled from 'styled-components';

const ToTp = () => {
  return (
    <StyledWrapper>
      <button className="Btn" data-aos="fade-up" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
        <svg height="1.2em" className="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
        <p className="text">Back to Top</p>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Btn {
    width: 45px;
    height: 45px;
    background: linear-gradient(#b05cff, #39fad7);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    right: 20px;
    bottom: 150px;
    border: none;
  }

  .arrow path {
    fill: white;
  }

  .text {
    font-size: 0.7em;
    width: 100px;
    position: absolute;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -18px;
    opacity: 0;
    transition-duration: .7s;
  }

  .Btn:hover .text {
    opacity: 1;
    transition-duration: .7s;
  }

  .Btn:hover .arrow {
    animation: slide-in-bottom .7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @keyframes slide-in-bottom {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }`;

export default ToTp;
