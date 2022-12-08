import React, {useState,forwardRef } from 'react'
import './RowCard.css'
import apiEndpoints from '../../../apiEndpoints'
import { useDispatch } from 'react-redux';
import {openRowCardWithMoreDetails } from '../../../features/rowCardWithMoreDetailsSlice';
const RowCard = forwardRef(({cardData,showType},ref) => {
    const [cardHoverTimeOut,setCardHoverTimeOut] = useState(null);
    const dispatch = useDispatch();
  const cardHoverHanlder = (e)=>{
    const rect = e.target.getBoundingClientRect();
    setCardHoverTimeOut(setTimeout(()=>{
      dispatch(openRowCardWithMoreDetails({data:cardData,isOpen:true,top:rect.top,left:rect.left,width:e.target.offsetWidth,showType:showType}))
    },500))
  }
  const cardHoverOutHandler = ()=>{
    clearTimeout(cardHoverTimeOut);
  }
  return (
    <div className='rowCard' onMouseEnter={(e)=>cardHoverHanlder(e)} onMouseLeave={cardHoverOutHandler} ref={ref}>
        <img src={`${apiEndpoints.imageBaseURL}${cardData.backdrop_path}`} alt={cardData.name} className='rowCard__image'/>
    </div>
  )
})

export default RowCard