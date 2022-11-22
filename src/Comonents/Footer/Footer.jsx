import './Footer.css'

import React from 'react'

let currentYear = new Date().getFullYear();

const Footer = (props) => {
  return (
    <div className='footer'>Copyright &#169; {props.companyName} | All rights reserved { currentYear }</div>
  )
}

export default Footer