import React, { useState } from 'react';
import drawerFig from '../../assets/icons/drawer/menuDrawer.png'
import arrowBack from '../../assets/icons/drawer/backArrow.png'
import HomeDrawer from '../../assets/icons/drawer/home.png'
import Contacts from '../../assets/icons/drawer/contactsDrawer.png'
import Instagram from '../../assets/icons/drawer/instagram.png'


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
                            <input 
                            type='image' 
                            alt=''
                            src={HomeDrawer}
                            className='HomeDrawerIcon'
                            onClick={() => alert('clique home')}
                            />
                            <p>home</p>
                        </div>
                        <div className='itemList'>
                            <input 
                            type='image' 
                            alt=''
                            src={Contacts}
                            className='listItemIcon'
                            onClick={() => alert('clique Contacts')}
                            />
                            <p>contatos</p>
                        </div>
                        <div className='itemList'>
                            <input 
                            type='image' 
                            alt=''
                            src={Instagram}
                            className='listItemIcon'
                            onClick={() => alert('clique Instagram')}
                            />
                            <p>redes sociais</p>
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
