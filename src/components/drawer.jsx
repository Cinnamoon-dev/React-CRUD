import React, { useState } from 'react'
import drawerFig  from '../assets/icons/drawer/drawerfig2.png'
import arrowBack  from '../assets/icons/drawer/arrowBack.png'


const DrawerContainer = (props) => {
    let changeStatus = props.handleChangeDrawerStatus();
    let status = props.status;


    return(
        <>
            {
            status && 
                <div className='DrawerContainer'>

                    <div className='DrawerExit'>
                        <button className='DrawerExitFig' onClick={() => changeStatus()}>
                            <img alt='DrawerFiguraExit' id='DrawerFigura' src={arrowBack} />
                        </button>
                    </div>

                    <div className='DrawerHeader'>
                        <label>Aqui é o Pedro O loco</label>
                    </div>

                </div>
            }
        </>
    );
}


export const Drawer = () => {
    const [ open, setOpen ] = useState(false);

    const handleChangeDrawerStatus = () => {
        setOpen(!open);
    }

    return (
        <>
            {
                !open &&
                <div>
                    <button className='DrawerEnterFig' onClick={ () => handleChangeDrawerStatus()}>
                        <img alt='DrawerImagem' src={drawerFig} id='DrawerFigura' />
                    </button>
                </div>
            }
            <DrawerContainer status={open} changeStatus={handleChangeDrawerStatus()} />
        </>
        
  );
}
