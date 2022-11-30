import React from "react"
import NavBar from "../NavBar"
import { Tabela, AddButton} from "./components"


const Contatos = () =>{  
    return (
      <div className='pagina'>
        <NavBar title={'Contatos'}/>
        <Tabela />
        <AddButton />
      </div>
    );
}


export default Contatos;