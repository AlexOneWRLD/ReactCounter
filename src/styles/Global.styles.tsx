import { createGlobalStyle } from 'styled-components'


export const GlobalStyled = createGlobalStyle `


  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ul,
  ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul,
  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font: inherit;
  }

  img {
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    color: inherit;
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  address {
    font-style: normal;
  }

  button,
  input,
  textarea {
    display: inline-block;
    padding: 0;
    background-color: transparent;
    border: 0;
  }

  button {
    cursor: pointer;
    appearance: none;
    background-color: unset;
    border: none;
  }

  input {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  legend {
    padding: 0;
  }

  picture {
    line-height: 0;
  }

  label {
    cursor: pointer;
  }


  body {
    margin: 0;
    font-family: 'Poppins', 'DM Sans', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #2c2b2b;
  }

`