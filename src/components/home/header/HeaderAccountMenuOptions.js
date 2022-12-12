import { signOut } from 'firebase/auth';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser, setUser } from '../../../features/userSlice';
import { auth, db } from '../../../firebase';
import './HeaderAccountMenuOptions.css'
import HeaderProfileIcon from './HeaderProfileIcon'
function HeaderAccountMenuOptions({isProfile=false,isLogout=false,isExitProfile=false,title,Icon=null,profile=null}) {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        const docRef = doc(db,'users',user?.userEmail);
        onSnapshot(docRef,(d)=>{
          dispatch(setUser(d.data()));
        })
      },[user?.userEmail]);

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