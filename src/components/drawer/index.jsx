import React from 'react'
import drawerFig from '../../assets/icons/drawer/menuDrawer.png'
import arrowBack from '../../assets/icons/drawer/backArrow.png'
import { Link } from 'react-router-dom'


export const DrawerContainer = (props) => {
    let status = props.status;

    const handleClose = () => {
        props.handleChangeStatus(false);
    }

    return(
        <>
            {
                status && 
                <div className='DrawerContainer'>

                    <div className='DrawerHeader'>
                        <label>Container do Drawer</label>
                    </div>
                    
                    <input 
                    type='image'
                    alt='DrawerFigExit'
                    src={arrowBack}
                    className='DrawerExitFig'
                    onClick={ () => handleClose()}/>
                    
                    <div className='listItensDrawer'>
                        
                        <div className='itemList'>
                            <Link to='/Home'>Home</Link>
                        </div>
                        
                        <div className='itemList'>
                            <Link to='/Contatos'>Contatos</Link>
                        </div>

                        <div className='itemList'>
                            <Link to='/'>Redes Sociais</Link>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}


export const Drawer = (props) => {
    const open = props.status;
    
    const handleOpen = () => {
        props.handleChangeStatus(true);
    } 

    return (
        <>
            {
                !open &&
                <div className='DrawerEnter'>
                    <input 
                        type='image'
                        alt='imagemDrawer'
                        src={drawerFig}
                        className='DrawerEnterFig'
                        onClick={ () => handleOpen()} />
                </div>
            }  
        </>
        
  );
}
