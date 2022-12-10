import React from 'react'
import './ProfileLink.css'
function ProfileLink({isAddProfileBtn=false,Icon,title,addProfile,setActiveProfileHandler}) {
  return (
    <div className='profileLink' onClick={isAddProfileBtn ? addProfile : setActiveProfileHandler} >
        <div className="profileLink__profileIcon">
            {isAddProfileBtn ? <Icon/> : <img src={Icon} alt="profile icon" />}
        </div>
        <span className="profileLink__title">{title}</span>
    </div>
  )
}

export default ProfileLink