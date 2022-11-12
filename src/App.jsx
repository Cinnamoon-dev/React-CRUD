import React from 'react';
import { Tabela, AddButton} from './components/components';
import { Drawer } from './components/drawer';
import './App.css';

function App() {
  return (
    <div className='pagina'>

      <Drawer />
      <div className='NavBar'>
        <div className='NavBarContainer'>Tabela</div>
      </div>

      <Tabela />
      <AddButton />
      
    </div>
  );
}

export default App;