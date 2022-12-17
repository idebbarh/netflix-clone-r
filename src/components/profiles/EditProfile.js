import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { db } from '../../firebase';
import './EditProfile.css'
import ProfileIconsSelector from './ProfileIconsSelector';

function EditProfile({profileToEdit,setIsEditProfilePageOpen}) {
    const user = useSelector(selectUser)
    const [profileNewData,setProfileNewData]=useState({...user.userProfiles[parseInt(profileToEdit)]});
    const [isProfileIconsSelectorOpen,setIsProfileIconsSelectorOpen]=useState(false)
    const saveChangeHandler = async ()=>{
        const profileNames = [];
        for(let i = 0 ; i < user.userProfiles.length ; i++){
          if(i !== parseInt(profileToEdit)){
            profileNames.push(user.userProfiles[i].profileTitle)
          }
        } 
        if(profileNewData.profileTitle.length > 0 && !profileNames.includes(profileNewData.profileTitle)){
      const docRef = doc(db,'users',user.userEmail)
      await updateDoc(docRef,{userProfiles:user.userProfiles.map((p,index)=>{
          return index !== profileToEdit ? {...p} : {...profileNewData}
      })}) 
      setIsEditProfilePageOpen(false)}
    }
    const deleteProfileHandler = async ()=>{
        const docRef = doc(db,'users',user.userEmail)
        await updateDoc(docRef,{userProfiles:user.userProfiles.filter((p,index)=>{
            return index !== profileToEdit;
        })})
        setIsEditProfilePageOpen(false)
    }
  return (
    <div className='editProfile'>
        <h1 className='editProfile__title'>edit profile</h1>
        <div className="editProfile__fields">
             <div className="editProfile__editIcon" onClick={()=>setIsProfileIconsSelectorOpen(true)}>
                 <img src={profileNewData.profileIconUrl} alt="profile icon" />
             </div>
             <input type="text" className='editProfile__editName' name='profileTitle' value={profileNewData.profileTitle} id='profileTitle' onChange={(e)=>setProfileNewData(prevState=>({...prevState,[e.target.name]:e.target.value}))}/>
        </div>
        <div className="addProfile__actions">
            <button className='addProfile__continueBtn' onClick={saveChangeHandler}>Save</button>
            <button className='addProfile__cancelBtn' onClick={()=>setIsEditProfilePageOpen(false)} >Cancel</button>
            <button className='addProfile__cancelBtn' onClick={deleteProfileHandler} >delete profile</button>
        </div>
        {isProfileIconsSelectorOpen && <ProfileIconsSelector setIsProfileIconsSelectorOpen={setIsProfileIconsSelectorOpen} setProfileEntryData={setProfileNewData}/>}
    </div>
  )
}

export default EditProfile