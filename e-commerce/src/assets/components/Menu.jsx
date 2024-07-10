import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 5px;
`;

const StyledBtn = styled.button`
  font-size: 35px; /* Aumenta o tamanho da fonte */
  font-weight: 900; /* Aumenta o peso da fonte */
  border: none;
  background-color: transparent;
  color: ${props => (props.isVisible ? 'red' : 'black')};
  transition: all ease 0.3s;
  z-index: 9999;
  cursor: pointer;

  @media only screen and (min-width: 1124px) {
    visibility: hidden;
  }
`;

const StyledUL = styled.ul`
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #211e1ed2;
  gap: 5px;
  transition: transform 0.5s ease, visibility 0.5s ease;
  transform: ${props => (props.isVisible ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 999;
  overflow-y: hidden;
 

  @media only screen and (min-width: 1124px) {
    width: auto;
    height: unset;
    position: unset;
    visibility: visible;
    flex-direction: row;
    gap: 10px;
    transform: translateX(0);
    background-color: transparent;
    justify-content: start;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  position: relative;
  font-size: 20px; /* Aumenta o tamanho da fonte */
  font-weight: 700; /* Aumenta o peso da fonte */

  &:first-child {
    display: none;
  }

  &:last-child {
    display: none;
  }

  &:hover > ul {
    display: block;
  }
`;

const StyledSubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  list-style: none;

  & > li {
    padding: 5px 10px;
  }

  & > li:hover {
    background-color: #f0f0f0;
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  font-size: 18px; /* Aumenta o tamanho da fonte */
  font-weight: 600; /* Aumenta o peso da fonte */
  padding: 10px;
  color: #ffffff;


  @media only screen and (min-width: 1124px) {
    color: #000000;

  } 

  &:hover {
    color: #8e8e8e;
  }
`;

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  const ToggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledDiv ref={menuRef}>
      <GlobalStyle />
      <StyledBtn isVisible={isVisible} onClick={ToggleMenu}>☰</StyledBtn>
      <StyledUL isVisible={isVisible}>
        <StyledLi><StyledA href="#">Login</StyledA></StyledLi>
        <StyledLi><StyledA href="#">Home</StyledA></StyledLi>
        <StyledLi>
          <StyledA href="#">Products</StyledA>
          {/* <StyledSubMenu>
            <li><StyledA href="#">Todos</StyledA></li>
            <li><StyledA href="#">Camisetas</StyledA></li>
            <li><StyledA href="#">Calças</StyledA></li>
            <li><StyledA href="#">Moletons</StyledA></li>
            <li><StyledA href="#">Kits</StyledA></li>
            <li><StyledA href="#">Acessórios</StyledA></li>
          </StyledSubMenu> */}
        </StyledLi>
        <StyledLi><StyledA href="#">Promotions</StyledA></StyledLi>
        <StyledLi><StyledA href="#">Releases</StyledA></StyledLi>
        <StyledLi><StyledA href="#">Saveds</StyledA></StyledLi>
        <StyledLi><StyledA href="#">Contact</StyledA></StyledLi>
        <StyledLi><StyledA href="#">Settings</StyledA></StyledLi>
      </StyledUL>
    </StyledDiv>
  );
};

export default Menu;
