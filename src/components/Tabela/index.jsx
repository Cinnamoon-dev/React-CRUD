import React, {useState} from "react";
import { DrawerContainer, Drawer} from "../drawer/drawer";
import NavBar from "../NavBar";
import { Tabela, AddButton} from "./components";


const Contatos = () =>{  
    return (
      <div className='pagina'>
        <NavBar title={'Tabela'}/>
  
        <Tabela />
        <AddButton />
      </div>
    );
}


export default Contatos;