import React from 'react'
import apiEndpoints from '../../../apiEndpoints'
import './RowCardWithMoreDetails.css'
import RowCardWithMoreDetailsOption from './RowCardWithMoreDetailsOption';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {motion} from 'framer-motion'
function RowCardWithMoreDetails({cardData,genresList}) {
  return (
    <motion.div className='rowCardWithMoreDetails'
                initial={{ opacity: 0,width: '100%',height: '200%',top:0}}
                animate={{ opacity: 1,width: '150%',height: '250%',top: '-70%'}}
                exit={{width: '100%',height: '200%',top:0}}
                transition={{ duration: 0.3 }}
    >
        <img src={`${apiEndpoints.imageBaseURL}${cardData.backdrop_path}`} alt={cardData.name} className='rowCardWithMoreDetails__image'/>
        <div className="rowCardWithMoreDetails__options">
            <RowCardWithMoreDetailsOption Icon={PlayArrowIcon} isPlay={true}/>
            <RowCardWithMoreDetailsOption Icon={AddIcon} isAddToMyList={true}/>
            <RowCardWithMoreDetailsOption Icon={ThumbUpOffAltIcon}  isRating={true}/>
            <RowCardWithMoreDetailsOption Icon={ExpandMoreIcon}  isMoreInfo={true}/>
        </div>
        <div className="rowCardWithMoreDetails__genres">
            {genresList.filter(genre=>{
                return cardData.genre_ids.includes(genre.id);
            }).splice(0,3).map((genre,index,arr)=>{
                return <span key={genre.id} className='rowCardWithMoreDetails__genre'>{genre.name}{index < arr.length-1 && <FiberManualRecordIcon/>}</span>
            })}
        </div>
    </motion.div>
  )
}

export default RowCardWithMoreDetails