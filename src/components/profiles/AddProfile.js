import React, { useEffect, useState } from 'react'
import iconsData from './profileIconsData'
import './AddProfile.css'
import ProfileIconsSelector from './ProfileIconsSelector';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { db } from '../../firebase';
import { arrayUnion, doc,updateDoc } from 'firebase/firestore';
function AddProfile({setIsAddProfileOpen}) {
    const [profileEntryData,setProfileEntryData] = useState({profileIconUrl:'',profileTitle:''});
    const [isProfileIconsSelectorOpen,setIsProfileIconsSelectorOpen] = useState(false);
    const user = useSelector(selectUser);
    useEffect(()=>{
        const randomIndex = Math.floor(Math.random()*iconsData.length);
        setProfileEntryData(prevState=>({...prevState,profileIconUrl:iconsData[randomIndex]}))
    },[]);
    const addProfileToDb = async ()=>{
        try{
            const userRef = doc(db,'users',user.userEmail);
            await updateDoc(userRef,{userProfiles:arrayUnion(profileEntryData)});
        }catch(e){
            alert(e.message);
        }
    }
    const addNewProfileHandler = async ()=>{
        const profileNames = [];
        for(let profile of user.userProfiles){
            profileNames.push(profile.profileTitle)
        } 
        if(profileEntryData.profileTitle.length > 0 && !profileNames.includes(profileEntryData.profileTitle)){
            await addProfileToDb();
            setIsAddProfileOpen(false);
        }
    } 
  return (
    <div className='addProfile'>
        <h1 className="addProfile__title">Add Profile</h1>
        <h2 className="addProfile__subTitle">Add a profile for another person watching Netflix.</h2>
        <div className="addProfile__profileEntry">
            <div className="addProfile__profileIcon" onClick={()=>setIsProfileIconsSelectorOpen(true)}>
                <img src={profileEntryData.profileIconUrl} alt="profile icon" />
            </div>
            <input type="text" className='addProfile__inputTitle' name='profileTitle' value={profileEntryData.profileTitle} id='profileTitle' onChange={(e)=>setProfileEntryData(prevState=>({...prevState,[e.target.name]:e.target.value}))}/>
        </div>
        <div className="addProfile__actions">
            <button className='addProfile__continueBtn' onClick={addNewProfileHandler}>Continue</button>
            <button className='addProfile__cancelBtn' onClick={()=>setIsAddProfileOpen(false)}>Cancel</button>
        </div>
        {isProfileIconsSelectorOpen && <ProfileIconsSelector setIsProfileIconsSelectorOpen={setIsProfileIconsSelectorOpen} setProfileEntryData={setProfileEntryData}/>}
    </div>
  )
}

export default AddProfile