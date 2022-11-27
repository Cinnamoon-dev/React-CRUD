import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home/index';
import Contatos from './components/Tabela/index';
import './components/drawer/drawer.css'
import './App.css';


export const App = () => {

  return(
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Contatos' element={<Contatos />} />
      </Routes>
  );  
}

export default App;