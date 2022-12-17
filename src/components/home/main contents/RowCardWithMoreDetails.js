import React, { useEffect, useState } from 'react'
import apiEndpoints from '../../../apiEndpoints'
import './RowCardWithMoreDetails.css'
import CardOptions from './CardOptions';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {motion} from 'framer-motion'
import { closeRowCardWithMoreDetails, selectRowCardWithMoreDetails } from '../../../features/rowCardWithMoreDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import CheckIcon from '@mui/icons-material/Check';
function RowCardWithMoreDetails({genresList}) {
    const {data:cardData,top,left,width,showType,isFromWatchList} = useSelector(selectRowCardWithMoreDetails);
    const [scrollYVal,setScrollYVal] = useState(0);
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    useEffect(()=>{
        setScrollYVal(window.scrollY);
    },[])
  return (
    <motion.div className='rowCardWithMoreDetails'
                initial={{ opacity: 0 ,scaleX:1,scaleY:1}}
                animate={{ opacity: 1,scaleX:1.5,scaleY:1.5}}
                exit={{scaleX:1,scaleY:1}}
                transition={{ duration: 0.3 }}
                style={{top:`${top+scrollYVal}px`,left:`${left}px`,width:`${width}px`}}
                onMouseLeave={()=>dispatch(closeRowCardWithMoreDetails())}
    >
        <img src={`${apiEndpoints.imageBaseURL}${cardData.backdrop_path}`} alt={cardData.name} className='rowCardWithMoreDetails__image'/>
        <div className="rowCardWithMoreDetails__options">
            <CardOptions Icon={PlayArrowIcon} isPlay={true}/>
            <CardOptions Icon={user?.userActiveProfile.profileFavList?.map(fav=>fav.id).includes(cardData.id) ? CheckIcon : AddIcon} isAddToMyList={true} showType={showType} data={cardData} isThisInFavList={user?.userActiveProfile.profileFavList?.map(fav=>fav.id).includes(cardData.id) ? true : false} isFromWatchList={isFromWatchList} />
            <CardOptions Icon={ThumbUpOffAltIcon}  isRating={true}/>
            <CardOptions Icon={ExpandMoreIcon}  isMoreInfo={true} data={cardData} showType={showType}/>
        </div>
        <div className="rowCardWithMoreDetails__genres">
            {cardData?.genres ? cardData?.genres.map((genre,index)=>{
                return <span key={genre?.id} className='rowCardWithMoreDetails__genre'>{index !== 0 && <FiberManualRecordIcon/>}{genre?.name}</span>
            }) : genresList.filter(genre=>{
                return cardData?.genre_ids?.includes(genre?.id);
            }).splice(0,3).map((genre,index)=>{
                return <span key={genre?.id} className='rowCardWithMoreDetails__genre'>{index !== 0 && <FiberManualRecordIcon/>}{genre?.name}</span>
            })}
        </div>
    </motion.div>
  )
}

export default RowCardWithMoreDetails