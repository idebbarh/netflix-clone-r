import React from 'react'
import iconsData from './profileIconsData'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './ProfileIconsSelector.css'
function ProfileIconsSelector({setIsProfileIconsSelectorOpen,setProfileEntryData}) {
    const selectIconHanlder = (iconUrl)=>{
        setProfileEntryData(prevState=>({...prevState,profileIconUrl:iconUrl}))
        setIsProfileIconsSelectorOpen(false)
    } 
  return (
    <div className='profileIconsSelector'>
        <div className="profileIconsSelector__goBackContainer">
            <KeyboardBackspaceIcon onClick={()=>setIsProfileIconsSelectorOpen(false)}/>
            <div className="profileIconsSelector__goBackText">
                <h1 className="profileIconsSelector__goBackTitle">Edit Profile</h1>
                <h2 className="profileIconsSelector__goBackSubTitle">Choose a profile icon.</h2>
            </div>
        </div>
        <div className="profileIconsSelector__iconsContainer">
            {iconsData.map((icon,index)=>{
                return <div className="profileIconsSelector__icon" key={index} onClick={()=>selectIconHanlder(icon)}>
                            <img src={icon} alt="profile icon"/>
                        </div>
            })}
        </div>
    </div>
  )
}

export default ProfileIconsSelector