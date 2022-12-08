import React from 'react'
import './RatingOptions.css'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {motion} from 'framer-motion'
function RatingOptions() {
  return (
    <motion.div className='ratingOptions' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className="ratingOptions__icon">
          <ThumbDownOffAltIcon/>
        </div>
        <div className="ratingOptions__icon">
          <ThumbUpOffAltIcon/>
        </div>
        <div className="ratingOptions__icon">
          <FavoriteBorderIcon/>
        </div>
    </motion.div>
  )
}

export default RatingOptions