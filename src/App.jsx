import React, { useState } from 'react';
import { Tabela, AddButton} from './components/components';
import { Drawer, DrawerContainer } from './components/drawer/drawer';
import './components/drawer/drawer.css'
import './App.css';

export const App = () => {
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