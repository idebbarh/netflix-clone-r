import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './HeaderAccountDropDown.css'
function HeaderAccountDropDown() {
  return (
    <div className='headerAccountDropDown'>
        <div className="headerAccountDropDown__profileIcon">
            <img src="https://occ-0-58-3934.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt="Profile Icon" />
        </div>
        <ArrowDropDownIcon className='headerAccountDropDown__arrowIcon'/>
    </div>
  )
}

export default HeaderAccountDropDown