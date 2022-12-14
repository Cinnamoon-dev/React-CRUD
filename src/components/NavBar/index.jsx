import React, { useState } from 'react'
import { DrawerContainer, Drawer } from '../drawer'
import './index.css'


const NavBar = (props) => {
    const [ open, setOpen ] = useState(false);

    return (
        <>
            <DrawerContainer status={open} handleChangeStatus={setOpen}/>
                <div className='NavBar'>
                    <Drawer status={open} handleChangeStatus={setOpen}/>
                    <h2>{props.title}</h2>
                </div>
        </>
    )
}

export default NavBar;