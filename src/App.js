import React from 'react';
import { Tabela, AddButton } from './components/components';
import './App.css';


export let contacts = [
      {id: 1, nome: 'Ajalmar', fone: '8888-7777', ações: ''},
      {id: 2, nome: 'Claudia', fone: '9999-4444',ações: ''},
      {id: 3, nome: 'Betinho', fone: '9876-3333',ações: ''},
      {id: 4, nome: 'Ana Julia', fone: '9855-3333',ações: ''}, 
      {id: 5, nome: 'Bia Julia', fone: '9755-3333',ações: ''}  
   ];


function App() {
  return (
    <div className='pagina'>

      <div className='NavBar'>
        <div className='NavBarContainer'>Tabela</div>
      </div>
        <div>
          <Tabela />
        </div>
        
        <AddButton />
      </div>
  );
}

export default App;
