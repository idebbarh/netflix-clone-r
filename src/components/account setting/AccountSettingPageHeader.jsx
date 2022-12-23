import React from "react"
import netflixLogo from '../../assets/images/Netflix_logo.png'
import "./AccountSettingPageHeader.css"
import HeaderAccountDropDown from "../../components/home/header/HeaderAccountDropDown.js"
import { useNavigate } from 'react-router-dom';
function AccountSettingPageHeader(){
    const navigate = useNavigate();
    return (
       <div className="accountSettingPageHeader">
           <div className="accountSettingPageHeader__logo" onClick={()=>navigate("/browser")}>
                   <img src={netflixLogo} alt="netflix logo" />
               </div>
               <HeaderAccountDropDown/>
       </div>  
    )
}
export default AccountSettingPageHeader
