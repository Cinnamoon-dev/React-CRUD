import React from 'react';
import { Tabela, AddButton } from './components/components';
import './App.css';

function App() {
  return (
    <div className='pagina'>
      <div className='NavBar'>
        <div className='NavBarContainer'>Tabela</div>
      </div>

      <div>
        <Tabela />
        <AddButton />
      </div>
    </div>
  );
}

export default App;