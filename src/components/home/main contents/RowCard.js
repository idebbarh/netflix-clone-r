import React, {useState,forwardRef, useEffect } from 'react'
import './RowCard.css'
import apiEndpoints from '../../../apiEndpoints'
import { useDispatch } from 'react-redux';
import {openRowCardWithMoreDetails } from '../../../features/rowCardWithMoreDetailsSlice';
import axiosConfig from '../../../axiosConfig';
const RowCard = forwardRef(({cardData,showType,isId},ref) => {
    const [cardHoverTimeOut,setCardHoverTimeOut] = useState(null);
    const dispatch = useDispatch();
    const [trueCardData,setTrueCardData]=useState(isId ? null : cardData);
    const apiKey = process.env.REACT_APP_API_KEY;
    useEffect(()=>{
        const fetchData = async ()=>{
            const mainRes = await axiosConfig.get(`${showType === 'movie' ? 'movie' : 'tv'}/${cardData.id}?api_key=${apiKey}&language=en-US`);
            setTrueCardData(mainRes.data);
        }
        if(isId){
          fetchData();
        }
    },[])
  const cardHoverHanlder = (e)=>{
    const rect = e.target.getBoundingClientRect();
    setCardHoverTimeOut(setTimeout(()=>{
      dispatch(openRowCardWithMoreDetails({data:trueCardData,isOpen:true,top:rect.top,left:rect.left,width:e.target.offsetWidth,showType:showType,isFromWatchList:isId ? true : false}))
    },700))
  }
  const cardHoverOutHandler = ()=>{
    clearTimeout(cardHoverTimeOut);
  }
  return (
    <div className='rowCard' onMouseEnter={(e)=>cardHoverHanlder(e)} onMouseLeave={cardHoverOutHandler} ref={ref}>
        <img src={`${apiEndpoints?.imageBaseURL}${trueCardData?.backdrop_path}`} alt={trueCardData?.name} className='rowCard__image'/>
    </div>
  )
})

export default RowCard