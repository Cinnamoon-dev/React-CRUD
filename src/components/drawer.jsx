import React, { useState } from 'react';
import drawerFig  from '../assets/icons/drawer/drawer4.png';
import arrowBack  from '../assets/icons/drawer/arrowBack.png';


const DrawerContainer = (props) => {
    let changeStatus = props.changeStatus;
    let status = props.status;


    return(
        <>
            
        </>
    );
}


export const Drawer = () => {
    /* terá que elevar o state para fora do componente   */
    const [ open, setOpen ] = useState(false);

    const handleCloseDrawer = () =>{
        setOpen(false);
    }

    const handleOpenDrawer = () =>{
        setOpen(true);
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
                        onClick={ () => handleOpenDrawer()} />
                </div>
            }  
            {
                open && 
                <div className='DrawerContainer'>

                    <div className='DrawerExit'>
                        <input 
                        type='image'
                        alt='DrawerFigExit'
                        src={arrowBack}
                        className='DrawerExitFig'
                        onClick={ () => handleCloseDrawer()}/>
                    </div>

                    <div className='DrawerHeader'>
                        <label>Container do Drawer</label>
                    </div>

                </div>
            }
        </>
        
  );
}
