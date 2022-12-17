import { signOut } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React  from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../../features/userSlice';
import { auth, db } from '../../../firebase';
import './HeaderAccountMenuOptions.css'
import HeaderProfileIcon from './HeaderProfileIcon'
function HeaderAccountMenuOptions({isProfile=false,isLogout=false,isExitProfile=false,title,Icon=null,profile=null,setIsMenuOpen}) {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
       const signOutHandler = async ()=>{
        try{
            await exitActiveProfileHandler();
          await signOut(auth);
          navigate('/');
        }catch(e){
          alert(e.message);
        }
    }
    const exitActiveProfileHandler = async ()=>{
        const userRef = doc(db,'users',user.userEmail);
        await updateDoc(userRef,{userActiveProfile:null});
    }
    const setActiveProfileHandler = async (selectedProfile)=>{
        try{
          const userRef = doc(db,'users',user?.userEmail);
          await updateDoc(userRef,{userActiveProfile:selectedProfile});
        }catch(e){
          alert(e.message);
        }
    
      };
    const onClickHandler = ()=>{
        if(isProfile){
            setActiveProfileHandler(profile);
            setIsMenuOpen();
        }else if(isExitProfile){
            exitActiveProfileHandler();
        }else{
            signOutHandler();
        }
    }
  return (
    <div className='headerAccountMenuOptions' onClick={[isProfile,isExitProfile,isLogout].some(item=>item===true) ? onClickHandler : undefined} style={isLogout ? {width:'100%',padding:'15px',borderTop:'1px solid gray',justifyContent:'center'} : {}}>
        {!isLogout && (isProfile ? <HeaderProfileIcon Icon={Icon}/> : <Icon/>)}
        <span className='headerAccountMenuOptions__title'>{title}</span>
    </div>
  )
}

export default HeaderAccountMenuOptions