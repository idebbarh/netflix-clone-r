import React,{useState} from 'react'
import RatingOptions from './RatingOptions'
import './CardOptions.css'
import {AnimatePresence} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
function CardOptions({data=null,isPlay=false,isRating=false,isMoreInfo=false,isAddToMyList=false,Icon,showType=null}) {
  const [isRatingOptionsOpen,setIsRatingOptionsOpen] = useState();
  const navigate = useNavigate();
    const onClickHandler = ()=>{
      if(isMoreInfo){
        return moreInfoHandler();
      }
      else if(isAddToMyList){
        return addToMyListHandler()
      }
        return undefined
    }
    const moreInfoHandler = ()=>{
      navigate(`title/${showType}/${data.id}`)
    }
    const addToMyListHandler = ()=>{
      console.log('add to my favorite')
    }

  return (
    <div className='cardOptions' style={isPlay ? {backgroundColor:'var(--main-white-color)'} : {backgroundColor:'rgb(36, 36, 36)',color:'var(--second-white-color)',marginLeft:`${isMoreInfo ? 'auto' : 0}`}} onMouseEnter={isRating ? ()=>setIsRatingOptionsOpen(true) : undefined} onMouseLeave={isRating ? ()=>setIsRatingOptionsOpen(false) : undefined} onClick={onClickHandler}>
        <Icon/>
        <AnimatePresence mode='wait'>{isRatingOptionsOpen && <RatingOptions key='ratingOptions' />}</AnimatePresence> 
    </div>
  )
}

export default CardOptions