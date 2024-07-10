import styled from 'styled-components';
import Bag from './Bag';
import Login from './Login';
import Lupa from './Lupa';

// Estilização opcional para o ícone
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media only screen and (min-width: 1024px) {
    justify-content: end;


  }

  @media only screen and (max-width: 1124px) {
    .desktop-only {
      display: none;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.desktop-only {
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

// Componente Card
function ContainerCards() {
  return (
    <StyledContainer>
      <IconWrapper className="desktop-only">
      <Lupa />
      </IconWrapper>
      <Bag />
      <IconWrapper className="desktop-only">
        <Login />
      </IconWrapper>
    </StyledContainer>
  );
}

export default ContainerCards;
