import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './RowTitle.css'
function RowTitle({rowTitle}) {
  return (
    <div className='rowTitle'>
        <h2 className='rowTitle__headerText'>{rowTitle}<KeyboardArrowRightIcon/></h2>
        <span className='rowTitle__exploreAll'>explore all</span>
    </div>
  )
}

export default RowTitle