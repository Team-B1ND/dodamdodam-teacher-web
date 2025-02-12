import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
    }

 
    ${reset}
`;

export default GlobalStyles;
