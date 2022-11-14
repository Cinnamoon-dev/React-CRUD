import React, { useState } from 'react';
import { Tabela, AddButton} from './components/components';
import { Drawer, DrawerContainer } from './components/drawer';
import './App.css';

export const App = () => {
  /* o state do drawer deve ficara aqui para que possa ser desvinculado do componente */
  const [ open, setOpen ] = useState(false);

  return (
    <div className='pagina'>

      <DrawerContainer status={open} handleChangeStatus={setOpen}/>
      
      <div className='NavBar'>
        <Drawer status={open} handleChangeStatus={setOpen}/>
        <h2>Tabela</h2>
      </div>

      <Tabela />
      <AddButton />
      
    </div>
  );
}

export default App;