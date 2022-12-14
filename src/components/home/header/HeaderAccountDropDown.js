import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './HeaderAccountDropDown.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import HeaderProfileIcon from './HeaderProfileIcon';
import HeaderAccountMenu from './HeaderAccountMenu';
function HeaderAccountDropDown() {
  const user = useSelector(selectUser);
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [mouseEnterTimeout,setMouseEnterTimeout] = useState(null);
  const mouseEnterHandler = ()=>{
    if(mouseEnterTimeout){
      clearTimeout(mouseEnterTimeout);
    }
    setIsMenuOpen(true);
  }
  const mouseLeaveHandler = ()=>{
    setMouseEnterTimeout(setTimeout(()=>{
      setIsMenuOpen(false);
    },400))
  }
  return (
    <div className='headerAccountDropDown' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <HeaderProfileIcon Icon={user.userActiveProfile?.profileIconUrl}/>
        <ArrowDropDownIcon className='headerAccountDropDown__arrowIcon'/>
        {isMenuOpen && <HeaderAccountMenu setIsMenuOpen={setIsMenuOpen}/>}
    </div>
  )
}

export default HeaderAccountDropDown
