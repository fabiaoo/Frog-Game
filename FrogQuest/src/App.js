import Menu from './components/Menu/index.js';
import Rotas from './Rotas.js'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() 
{
  return (
      <BrowserRouter>
          <Rotas/>
      </BrowserRouter>
  );
}

export default App;
