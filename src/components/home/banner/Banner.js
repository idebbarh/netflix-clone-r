import React, { useEffect, useState } from 'react'
import './Banner.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import axiosConfig from '../../../axiosConfig'
import apiEndpoints from '../../../apiEndpoints';
import { useNavigate } from 'react-router-dom';
export function truncateMovieStoryString(string,size){
    return string?.substr(0,size)+'...';
}
function Banner() {
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchData = async ()=>{
            const resOne = await axiosConfig.get(apiEndpoints.topRatedTvShows);
            const resTwo = await axiosConfig.get(apiEndpoints.popularTvShows);
            const mixtRes = [...resOne.data.results,...resTwo.data.results];
            setData(mixtRes[Math.floor(Math.random()*mixtRes.length)]);
        }
        fetchData()
    },[]);
    const moreInfoHandler = ()=>{
        navigate(`title/${'tvshow'}/${data.id}`)
      }
  return (
    <div className='banner'>
        <img src={`${apiEndpoints.imageBaseURL}/${data?.backdrop_path}`} alt={data?.name} className='banner__image'/>
        <div className="banner__movieInfo">
            <h1 className="banner__movieTitle">{data?.name}</h1>
            <p className="banner__movieStory">{truncateMovieStoryString(data?.overview,150)}</p>
            <div className="banner__btns">
                <button className="banner__btn btn--play"><PlayArrowIcon/>play</button>
                <button className="banner__btn btn--moreInfo" onClick={moreInfoHandler}><InfoIcon/>more info</button>
            </div>
        </div>
        <div className="banner__gradient"></div>
    </div>
  )
}

export default Banner