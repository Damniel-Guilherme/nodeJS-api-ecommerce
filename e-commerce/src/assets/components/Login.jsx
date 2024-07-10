import styled from 'styled-components';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

// Estilização opcional para o ícone
const StyledIcon = styled(AccountCircleSharpIcon)`
  font-size: 48px;
  color: #000;
`;

// Componente Card
function Login() {
  return (
    <div>
      <StyledIcon color="black" fontSize="large"/>
    </div>
  );
}

export default Login;