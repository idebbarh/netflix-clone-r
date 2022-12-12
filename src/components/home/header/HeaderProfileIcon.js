import React from 'react'
import './HeaderProfileIcon.css'
function HeaderProfileIcon({Icon}) {
  return (
    <div className="headerAccountDropDown__profileIcon">
        <img src={Icon} alt="Profile Icon" />
    </div>  
  )
}

export default HeaderProfileIcon