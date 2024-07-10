import { createGlobalStyle } from 'styled-components';

// Define estilos globais para importar a fonte do Google Fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;