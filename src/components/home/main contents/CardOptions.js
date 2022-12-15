import React,{useState} from 'react'
import RatingOptions from './RatingOptions'
import './CardOptions.css'
import {AnimatePresence} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { selectUser } from '../../../features/userSlice';
import { closeRowCardWithMoreDetails } from '../../../features/rowCardWithMoreDetailsSlice';
function CardOptions({data=null,isPlay=false,isRating=false,isMoreInfo=false,isAddToMyList=false,Icon,showType=null,isThisInFavList=null,isFromWatchList=null}) {
  const [isRatingOptionsOpen,setIsRatingOptionsOpen] = useState();
  const user = useSelector(selectUser)
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const onClickHandler = ()=>{
      if(isMoreInfo){
        return moreInfoHandler();
      }
      else if(isAddToMyList){
        if(!isThisInFavList){
          return addToMyListHandler()
        }else{
          return removeFromMyListHandler()
        }
      }
        return undefined
    }
    const moreInfoHandler = ()=>{
      navigate(`title/${showType}/${data.id}`)
    }

    const addToMyListHandler = async ()=>{
        const docRef = doc(db,'users',user.userEmail)
        await updateDoc(docRef,{userFavList:arrayUnion({id:data.id,showType:showType})})
    }

    const removeFromMyListHandler = async ()=>{
      if(isFromWatchList){
        dispatch(closeRowCardWithMoreDetails());
      }
        const docRef = doc(db,'users',user.userEmail);
        await updateDoc(docRef,{userFavList:user.userFavList.filter(fav=>fav.id!==data.id)});
    }
  return (
    <div className='cardOptions' style={isPlay ? {backgroundColor:'var(--main-white-color)'} : {backgroundColor:'rgb(36, 36, 36)',color:'var(--second-white-color)',marginLeft:`${isMoreInfo ? 'auto' : 0}`}} onMouseEnter={isRating ? ()=>setIsRatingOptionsOpen(true) : undefined} onMouseLeave={isRating ? ()=>setIsRatingOptionsOpen(false) : undefined} onClick={onClickHandler}>
        <Icon/>
        <AnimatePresence mode='wait'>{isRatingOptionsOpen && <RatingOptions key='ratingOptions' />}</AnimatePresence> 
    </div>
  )
}

export default CardOptions
