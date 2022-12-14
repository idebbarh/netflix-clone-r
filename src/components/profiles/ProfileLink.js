import React from 'react'
import './ProfileLink.css'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function ProfileLink({isAddProfileBtn=false,Icon,title,addProfile,setActiveProfileHandler,isManageProfilesMode,setIsEditProfilePageOpen,setProfileToEdit,index}) {
  const editProfileOpenPageHandler = ()=>{
      setIsEditProfilePageOpen(true)
      setProfileToEdit(index)
    
  }
  return (

    <div className='profileLink' onClick={isAddProfileBtn ? addProfile : (isManageProfilesMode ? editProfileOpenPageHandler: setActiveProfileHandler)} >
        <div className="profileLink__profileIcon">
            {isAddProfileBtn ? <Icon/> : <img src={Icon} alt="profile icon" />}
            {!isAddProfileBtn && isManageProfilesMode && <div className="profileLink__manageModeOverlay">
                  <ModeEditIcon/>
            </div>}
        </div>
           <span className="profileLink__title">{title}</span>
    </div>
  )
}

export default ProfileLink