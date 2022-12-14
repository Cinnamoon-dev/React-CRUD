import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home/index';
import Contatos from './components/Tabela/index';
import './components/drawer/index.css'
import './App.css';
import NotFound from './components/Error';


export const App = () => {

  return(
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Contatos' element={<Contatos />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
  );  
}

export default App;