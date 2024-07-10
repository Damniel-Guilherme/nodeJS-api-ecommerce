import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const ContainerSearch = styled.div`
  display: flex;
  background-color: #e6e6e6;
  border-radius: 10px;
  padding: 5px;

 #search-produto {
    color: #000000;
    text-align: center;
    border: none;
    
    background-color: #e6e6e6;
    border-radius: 10px;
  ::placeholder {
    color: #000000;
  }

  &:focus {
    outline: none;
    box-shadow: none
  }
  
 }

`

// Estilização opcional para o ícone
const StyledIcon = styled(SearchOutlinedIcon)`
  color: #000;
`;

// Componente Card
function Lupa() {
  return (

      <ContainerSearch>
        <input type="search" name="search" id="search-produto" placeholder='Pesquisar Produto !'/>
        <label htmlFor="search-produto"><StyledIcon fontSize='large'></StyledIcon></label>
      </ContainerSearch>


  );
}

export default Lupa;