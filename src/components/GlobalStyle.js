import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1
h2,
h3,
p {
  margin: 0;
}

ul { 
    margin: 0;
    padding: 0;
    list-style: none;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

button {
  display: block;
  width: 90px;
  padding: 4px 8px;
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid #eef0f2;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #fdfdfe;
}

button:hover {
  color: #fff;
  background-color: #2d66c3; 
}

`;
