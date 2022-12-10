import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './HeaderAccountDropDown.css'
import { signOut } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
function HeaderAccountDropDown() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const signOutHandler = async ()=>{
        try{
          const userRef = doc(db,'users',user.userEmail);
          await updateDoc(userRef,{userActiveProfile:null});
          await signOut(auth);
          navigate('/');
        }catch(e){
          alert(e.message);
        }
    }
  
  return (
    <div className='headerAccountDropDown' onClick={signOutHandler}>
        <div className="headerAccountDropDown__profileIcon">
            <img src={user.userActiveProfile?.profileIconUrl} alt="Profile Icon" />
        </div>
        <ArrowDropDownIcon className='headerAccountDropDown__arrowIcon'/>
    </div>
  )
}

export default HeaderAccountDropDown