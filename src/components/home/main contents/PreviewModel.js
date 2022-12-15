import React, { useEffect, useState } from 'react'
import './PreviewModel.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate, useParams } from 'react-router-dom';
import axiosConfig from '../../../axiosConfig';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { closeRowCardWithMoreDetails } from '../../../features/rowCardWithMoreDetailsSlice';
import apiEndpoints from '../../../apiEndpoints';
import MoreLikeThisCard from './MoreLikeThisCard';
import CardOptions from './CardOptions';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CloseIcon from '@mui/icons-material/Close';
import { selectUser } from '../../../features/userSlice';
import CheckIcon from '@mui/icons-material/Check';
function PreviewModel({genresList}) {
    const navigate = useNavigate();
    const {showType,id} = useParams();
    const [cardData,setCardData] = useState(null);
    const [similarData,setSimilarData] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        const fetchData = async ()=>{
            const mainRes = await axiosConfig.get(`${showType === 'movie' ? 'movie' : 'tv'}/${id}?api_key=${apiKey}&language=en-US`);
            const creditsRes = await axiosConfig.get(`${showType === 'movie' ? 'movie' : 'tv'}/${id}/credits?api_key=${apiKey}&language=en-US`);
            const similarRes = await axiosConfig.get(`${showType === 'movie' ? 'movie' : 'tv'}/${id}/similar?api_key=${apiKey}&language=en-US&page=1`);
            setCardData({...mainRes.data,cast:creditsRes.data.cast.slice(0,3)});
            setSimilarData(similarRes.data.results);
        }
        fetchData();
    },[id,apiKey,showType]);
   
    const removeModelFromScreen = (e,isBtn=false)=>{
        if(e.currentTarget === e.target || isBtn){
            navigate(-1);
            document.body.style.overflow = 'visible';
            dispatch(closeRowCardWithMoreDetails())
        }
    }
    const similarCardsElem = similarData.map(data=>{
        return  data.backdrop_path && <MoreLikeThisCard showType={showType} cardData={data} key={data.id}/>
    })
  return (
    <div className="focursWrapper" onClick={(e)=> removeModelFromScreen(e)}>
        <motion.div className='previewModel' initial={{opacity:0,scale:-0.1}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{ duration: 0.3,delay:0.1 }}>
            <div className="previewModel__closeBtn" onClick={(e)=> removeModelFromScreen(e,true)}>
                <CloseIcon/>
            </div>
            <div className="previewModel__image">
                <img src={`${apiEndpoints.imageBaseURL}/${cardData?.backdrop_path}`} alt={cardData?.title ? cardData?.title : cardData?.name} />
                <div className="previewModel__imageInfo">
                    <h1 className="previewModel__movieTitle">{cardData?.title ? cardData?.title : cardData?.name}</h1>
                    <div className="previewModel__btns">
                        <button className="previewModel__btn btn--play"><PlayArrowIcon/>play</button>
                        <CardOptions Icon={user?.userFavList?.map(fav=>fav.id).includes(cardData?.id) ? CheckIcon : AddIcon} isAddToMyList={true} showType={showType} data={cardData} isThisInFavList={user?.userFavList?.map(fav=>fav.id).includes(cardData?.id) ? true : false}/>
                        <CardOptions Icon={ThumbUpOffAltIcon}  isRating={true}/>
                    </div>
                </div>
            </div>
            <div className="previewModel__mainInfo">
                <div className="previewModel__mainInfoLeft">
                    <p className="previewModel__story">{cardData?.overview}</p>
                </div>
                <div className="previewModel__mainInfoRight">
                    <div className="previewModel__detailTag">   
                        <ul>
                            <span>cast:</span>
                            {cardData?.cast.map(item=>{
                                return <li key={item.id}>{item.name},</li>
                            })}
                            <li>more</li>
                        </ul>
                    </div>
                    <div className="previewModel__detailTag">
                        <ul>
                            <span>genres:</span>
                            {cardData?.genres ? cardData?.genres.map((genre,index,arr)=>{
                                return <li key={genre.id}>{genre.name}{index !== arr.length -1 && ','}</li>
                            }): genresList.filter(genre=>{
                                return cardData?.genre_ids.includes(genre.id);
                            }).splice(0,3).map((genre,index,arr)=>{
                                return <li key={genre.id}>{genre.name}{index !== arr.length -1 && ','}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="previewModel__moreLikeThisSection">
                <h3 className="previewModel__sectionHead">more like this</h3>
                <div className="previewModel__moreLikeThisGridContainer">
                   {similarCardsElem}
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default PreviewModel