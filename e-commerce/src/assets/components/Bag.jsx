import styled from 'styled-components';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';

// Estilização opcional para o ícone
const StyledIcon = styled(LocalMallSharpIcon)`
  font-size: 48px;
  color: #000;
`;

// Componente Card
function Bag() {
  return (
    <div>
      <StyledIcon color="black" fontSize="large"/>
    </div>
  );
}

export default Bag;