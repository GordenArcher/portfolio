import styled from 'styled-components';
import PropType  from 'prop-types'

const HamburgerToggle = ({ openSide }) => {
  return (
    <StyledWrapper>
      <div>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" onClick={openSide} className="toggle">
          <div className="bars" id="bar1" />
          <div className="bars" id="bar2" />
          <div className="bars" id="bar3" />
        </label>
      </div>
    </StyledWrapper>
  );
};

HamburgerToggle.propTypes = {
    openSide: PropType.func
}

const StyledWrapper = styled.div`
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition-duration: .5s;
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color: rgb(176, 92, 255);
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: .8s;
  }

  #bar1,#bar3 {
    width: 70%;
  }

  #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: .5s;
  }

  #checkbox:checked + .toggle {
    transition-duration: .5s;
    transform: rotate(180deg);
  }`;

export default HamburgerToggle  