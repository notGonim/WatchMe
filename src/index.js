import { render } from 'react-dom';
import App from './App';
import React from 'react';
import { GlobalStyles } from './styles/global-styles'
render(<>
  <GlobalStyles />
  <App />
</>,
  document.getElementById('root')
);
