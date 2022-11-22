import './Navbar.css';

import React from 'react'

const Navbar = (props) => {
    return (
        <div className='navbar'>
            {props.menus.map((menu) => {
                return <a className='menu' href={`/${menu}`}>{menu}</a>
            })}
        </div>
    )
}

export default Navbar;