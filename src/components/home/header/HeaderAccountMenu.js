import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import './HeaderAccountMenu.css'
import HeaderAccountMenuOptions from './HeaderAccountMenuOptions'
import EditIcon from '@mui/icons-material/Edit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function HeaderAccountMenu() {
   
    const user = useSelector(selectUser);

     
  return (
    <div className='headerAccountMenu'>
       {user?.userProfiles?.filter(profile=>profile?.profileTitle!==user?.userActiveProfile?.profileTitle).map((profile,index)=>{
            return <HeaderAccountMenuOptions Icon={profile.profileIconUrl} title={profile.profileTitle} isProfile={true} key={index} profile={profile}/>;
       })}  
       <HeaderAccountMenuOptions Icon={EditIcon} title='manage profiles' />
       <HeaderAccountMenuOptions Icon={ExitToAppIcon} title='exit profile' isExitProfile={true}/>
       <HeaderAccountMenuOptions Icon={MoveDownIcon} title='transfer profile' />
       <HeaderAccountMenuOptions Icon={ManageAccountsIcon} title='account' />
       <HeaderAccountMenuOptions Icon={HelpOutlineIcon} title='help center' />
       <HeaderAccountMenuOptions title='sign out of netflix' isLogout={true}/>
    </div>
  )
}

export default HeaderAccountMenu;