import React, { useState } from 'react';
import drawerFig  from '../assets/icons/drawer/drawer4.png';
import arrowBack  from '../assets/icons/drawer/arrowBack.png';


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

                    <div className='DrawerExit'>
                        <input 
                        type='image'
                        alt='DrawerFigExit'
                        src={arrowBack}
                        className='DrawerExitFig'
                        onClick={ () => handleClose()}/>
                    </div>

                    <div className='DrawerHeader'>
                        <label>Container do Drawer</label>
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
