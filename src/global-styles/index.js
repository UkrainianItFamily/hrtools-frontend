import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { createTheme } from '@mui/material/styles';

export default css`
  // Reset css
  // Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  // Preferred box-sizing value
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  // Remove list styles (bullets/numbers)
  ol,
  ul {
    list-style: none;
  }

  // For images to not be able to exceed their container and clear images bottom space
  img {
    max-width: 100%;
    display: block;
  }

  // Removes spacing between cells in tables
  table {
    border-collapse: collapse;
  }

  // Revert the 'white-space' property for textarea elements on Safari
  textarea {
    white-space: revert;
  }
  a:hover {
    cursor: pointer;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #333;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }
`;

export const MainWrap = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 1200px) {
    margin: 15px;
  }
`;

export const Wrap = styled.div`
  max-width: 1024px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const theme = createTheme({
  palette: {
    primary: {
      main: '#73c41d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#969797',
    },
  },
});
