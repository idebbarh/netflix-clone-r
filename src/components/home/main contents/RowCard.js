import React, { useEffect, useState,forwardRef } from 'react'
import './RowCard.css'
import apiEndpoints from '../../../apiEndpoints'
import RowCardWithMoreDetails from './RowCardWithMoreDetails'
import axiosConfig from '../../../axiosConfig';
import {AnimatePresence} from 'framer-motion'
const RowCard = forwardRef(({cardData,rowHoverOutHandler,rowHoverHandler},ref) => {
    const [genresList,setGenresList] = useState([]);
    const [rowCardWithMoreDetailsIsOpen,setRowCardWithMoreDetailsIsOpen] = useState(false);
    const [cardHoverTimeOut,setCardHoverTimeOut] = useState(null);
  useEffect(()=>{
    const fetchData = async ()=>{
        const res = await axiosConfig.get(apiEndpoints.tvShowGenresList);
        setGenresList(res.data.genres)
    }
    fetchData()
  },[])

  const cardHoverHanlder = (e)=>{
    const rect = e.target.getBoundingClientRect()
    console.log(rect.top,rect.left)
    setCardHoverTimeOut(setTimeout(()=>{
        setRowCardWithMoreDetailsIsOpen(true);
        rowHoverOutHandler();
    },500))
  }

  const cardHoverOutHandler = ()=>{
    clearTimeout(cardHoverTimeOut);
    setRowCardWithMoreDetailsIsOpen(false);
    rowHoverHandler();
  }

  return (
    <div className='rowCard' onMouseEnter={(e)=>cardHoverHanlder(e)} onMouseLeave={cardHoverOutHandler} ref={ref}>
        <img src={`${apiEndpoints.imageBaseURL}${cardData.backdrop_path}`} alt={cardData.name} className='rowCard__image'/>
        <AnimatePresence mode='wait'>{rowCardWithMoreDetailsIsOpen && <RowCardWithMoreDetails key={cardData.id} cardData={cardData} genresList={genresList}/>}</AnimatePresence>
    </div>
  )
})

export default RowCard