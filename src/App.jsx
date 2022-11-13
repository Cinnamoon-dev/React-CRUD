import React from 'react';
import { Tabela, AddButton} from './components/components';
import { Drawer } from './components/drawer';
import './App.css';

export const App = () => {
  /* o state do drawer deve ficara aqui para que possa ser desvinculado do componente */

  
  return (
    <div className='pagina'>

      <div className='NavBar'>
        <Drawer />
        <h2>Tabela</h2>
      </div>

      <Tabela />
      <AddButton />
      
    </div>
  );
}

export default App;