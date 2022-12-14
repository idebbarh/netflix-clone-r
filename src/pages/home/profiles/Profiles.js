import React, { useEffect, useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProfileLink from '../../../components/profiles/ProfileLink';
import './Profiles.css'
import AddProfile from '../../../components/profiles/AddProfile';
import {doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from '../../../features/userSlice';
import EditProfile from '../../../components/profiles/EditProfile';
function Profiles() {
  const [isAddProfileOpen,setIsAddProfileOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isManageProfilesMode,setIsManageProfilesMode]=useState(false);
  const [isEditProfilePageOpen,setIsEditProfilePageOpen]=useState(false)
  const [profileToEdit,setProfileToEdit]= useState(null);
  useEffect(()=>{
    const docRef = doc(db,'users',user?.userEmail);
    onSnapshot(docRef,(d)=>{
      dispatch(setUser(d.data()));
    })
  },[user?.userEmail]);
  const setActiveProfileHandler = async (selectedProfile)=>{
    try{
      const userRef = doc(db,'users',user?.userEmail);
      await updateDoc(userRef,{userActiveProfile:selectedProfile});
    }catch(e){
      alert(e.message);
    }

  };
  const profilesListElem = user?.userProfiles?.map((profile,index)=>{
    return <ProfileLink Icon={profile.profileIconUrl} title={profile.profileTitle} key={index} setActiveProfileHandler={()=>setActiveProfileHandler(profile)} isManageProfilesMode={isManageProfilesMode} setIsEditProfilePageOpen={setIsEditProfilePageOpen} setProfileToEdit={setProfileToEdit} index={index}/>
  })
  return (
    <div className='profiles'>
      {isAddProfileOpen ? 
      <AddProfile setIsAddProfileOpen={setIsAddProfileOpen}/> : 
       (isEditProfilePageOpen ?
       <EditProfile profileToEdit={profileToEdit} setIsEditProfilePageOpen={setIsEditProfilePageOpen}/> :
        <>
          <div className="profiles__listProfiles">
                <h1 className="profiles__title">Who's watching?</h1>
                <div className="profiles__chooseProfile">
                    {profilesListElem}
                    {user?.userProfiles?.length < 4 && <ProfileLink isAddProfileBtn={true} Icon={AddCircleIcon} title='Add Profile' addProfile={()=>setIsAddProfileOpen(true)}/>}
                </div>
            </div>
            <button className={`profiles__manageProfilesBtn${isManageProfilesMode ? " profiles__manageProfilesBtn--done" : ""}`} onClick={()=>setIsManageProfilesMode(prevState=>!prevState)}>{isManageProfilesMode ? "done" : "Manage Profiles"}</button>
        </>) 
      }
    </div>
  )
}

export default Profiles