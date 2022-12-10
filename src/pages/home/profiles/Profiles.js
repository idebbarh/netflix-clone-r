import React, { useEffect, useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProfileLink from '../../../components/profiles/ProfileLink';
import './Profiles.css'
import AddProfile from '../../../components/profiles/AddProfile';
import {doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from '../../../features/userSlice';
function Profiles() {
  const [profilesList,setProfilesList] = useState([]);
  const [isAddProfileOpen,setIsAddProfileOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(()=>{
    const docRef = doc(db,'users',user.userEmail);
    onSnapshot(docRef,(d)=>{
      const userData = d.data();
      setProfilesList(userData.userProfiles);
      dispatch(setUser(userData));
    })
  },[user.userEmail]);

  const setActiveProfileHandler = async (selectedProfile)=>{
    try{
      const userRef = doc(db,'users',user.userEmail);
      await updateDoc(userRef,{userActiveProfile:selectedProfile});
    }catch(e){
      alert(e.message);
    }

  };
  const profilesListElem = profilesList.map((profile,index)=>{
    return <ProfileLink Icon={profile.profileIconUrl} title={profile.profileTitle} key={index} setActiveProfileHandler={()=>setActiveProfileHandler(profile)} />
  })
  return (
    <div className='profiles'>
      {isAddProfileOpen ? 
      <AddProfile setIsAddProfileOpen={setIsAddProfileOpen}/> : 
        <>
          <div className="profiles__listProfiles">
                <h1 className="profiles__title">Who's watching?</h1>
                <div className="profiles__chooseProfile">
                    {profilesListElem}
                    {profilesList.length < 4 && <ProfileLink isAddProfileBtn={true} Icon={AddCircleIcon} title='Add Profile' addProfile={()=>setIsAddProfileOpen(true)}/>}
                </div>
            </div>
            <button className='profiles__manageProfilesBtn'>Manage Profiles</button>
        </>
      }

    </div>
  )
}

export default Profiles