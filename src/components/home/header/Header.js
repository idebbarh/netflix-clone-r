import React, { useEffect, useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css'
import HeaderSearchBar from './HeaderSearchBar';
import HeaderAccountDropDown from './HeaderAccountDropDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
    const [scrollPosIsZero,setScrollPosIsZero] = useState(true);
    const [navigationLinksHovered,setNavigationLinksHovered] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setScrollPosIsZero(window.scrollY === 0)
        })
        return ()=>{
            window.removeEventListener('scroll',()=>{
                setScrollPosIsZero(window.scrollY === 0)
            })
        }
    },[])
    const headerStyle = scrollPosIsZero ? {} : {
        backgroundColor: 'rgb(13, 13, 13)',
    }
  return (
    <div className='header' style={headerStyle}>
        <div className="header__left">
            <div className="header__logo">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo" />
            </div>
           <span className='header__menuTrigger' onClick={()=>setNavigationLinksHovered(prevState=>!prevState)}>browse<ArrowDropDownIcon className='header__arrowIcon'/></span>
            <ul className="header__navigationLinks" style={navigationLinksHovered ? {display:'flex'} : {}}>
                <li className="header__navigationLink header__navigationLink--active">home</li>
                <li className="header__navigationLink">tv shows</li>
                <li className="header__navigationLink">movies</li>
                <li className="header__navigationLink">news & popular</li>
                <li className="header__navigationLink">my list</li>
                <li className="header__navigationLink">browse by languages</li>
            </ul>
        </div>
        <div className="header__right">
            <HeaderSearchBar/>
            <NotificationsIcon className='header__rigthIcon'/>
            <HeaderAccountDropDown/>
        </div>
    </div>
  )
}

export default Header