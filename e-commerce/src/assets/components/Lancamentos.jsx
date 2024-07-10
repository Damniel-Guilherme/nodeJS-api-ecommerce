import React from 'react';
import styled from 'styled-components';

// Estilos globais
import GlobalStyle from './GlobalStyle';

const LancamentosContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    
   

  overflow-x: hidden;
  background-color: #ffffff;
`;

const Title = styled.h1`
    width: 1920px;
  margin-left: 20px;
  margin-top: 20px;
  color: #000000;
  font-size: 20px;
  text-align: start;
 font-family: 'Roboto', sans-serif;  // Adiciona a fonte Roboto ao título

 @media only screen and (min-width: 1024px) {
    font-size: 30px;
    margin: 0 20px;
    padding: 20px;
 }

`;

const Lancamentos = () => {
  return (
    <LancamentosContainer>
      <GlobalStyle />
      <Title>Releases</Title>
    </LancamentosContainer>
  );
}

export default Lancamentos;