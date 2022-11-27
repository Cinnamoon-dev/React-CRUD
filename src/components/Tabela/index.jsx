import React, {useState} from "react";
import { DrawerContainer, Drawer} from "../drawer/drawer";
import { Tabela, AddButton} from "./components";


const Contatos = () =>{
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


export default Contatos;