import styled from 'styled-components';
import LogoImg from '../imgs/logo.svg';

const StyledLogo = styled.img`
  width: 100px;
  color: white;

  @media only screen and (min-width: 1124px) {
    width: 130px;
  }
`;

const StyledDiv = styled.div`
  @media only screen and (min-width: 1024px) {


  }
`

function Logo() {
  return (
    <StyledDiv>
      <StyledLogo src={LogoImg} alt="Logo Rexpeita" />
    </StyledDiv>

  );
}

export default Logo;