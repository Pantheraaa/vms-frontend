import './Header.css';

import React from 'react'

const Header = (props) => {
  return (
    <div className='header'>{props.projectName}</div>
  )
}

export default Header;