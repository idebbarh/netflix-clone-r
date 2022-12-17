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

function HeaderAccountMenu({setIsMenuOpen}) {
   
    const user = useSelector(selectUser);

     
  return (
    <div className='headerAccountMenu'>
       {user?.userProfiles?.filter(profile=>profile?.profileTitle!==user?.userActiveProfile?.profileTitle).map((profile)=>{
            return <HeaderAccountMenuOptions Icon={profile.profileIconUrl} title={profile.profileTitle} isProfile={true} key={profile.profileTitle} profile={profile} setIsMenuOpen={setIsMenuOpen}/>;
       })}  
       <HeaderAccountMenuOptions Icon={EditIcon} title='manage profiles' key={'manage profiles'} />
       <HeaderAccountMenuOptions Icon={ExitToAppIcon} title='exit profile' isExitProfile={true} key={'exit profile'}/>
       <HeaderAccountMenuOptions Icon={MoveDownIcon} title='transfer profile'  key={'transfer profile'}/>
       <HeaderAccountMenuOptions Icon={ManageAccountsIcon} title='account' key={'account'}/>
       <HeaderAccountMenuOptions Icon={HelpOutlineIcon} title='help center' key={'help center'}/>
       <HeaderAccountMenuOptions title='sign out of netflix' isLogout={true} key={'sign out of netflix'}/>
    </div>
  )
}

export default HeaderAccountMenu;