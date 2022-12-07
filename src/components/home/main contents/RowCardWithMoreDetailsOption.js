import React from 'react'
import './RowCardWithMoreDetailsOption.css'
function RowCardWithMoreDetailsOption({isPlay=false,isRating=false,isMoreInfo=false,isAddToMyList=false,Icon}) {
  return (
    <div className='rowCardWithMoreDetailsOption' style={isPlay ? {backgroundColor:'var(--main-white-color)'} : {backgroundColor:'rgb(36, 36, 36)',color:'var(--second-white-color)',marginLeft:`${isMoreInfo ? 'auto' : 0}`}}>
        <Icon/>
    </div>
  )
}

export default RowCardWithMoreDetailsOption