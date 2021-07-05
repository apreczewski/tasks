import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.shark};
    color: ${colors.athensGray};
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    margin: 0 10rem;

    @media (max-width: 800px) {
      margin: 0 5rem;
    }

    @media (max-width: 700px) {
      margin: 0 4rem;
    }

    @media (max-width: 600px) {
      margin: 0 3rem;
    }

    @media (max-width: 500px) {
      margin: 0 2rem;
    }

    @media (max-width: 400px) {
      margin: 0 1rem;
    }
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size:  16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
