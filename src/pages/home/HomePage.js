import React, { useEffect, useState } from 'react'
import Banner from '../../components/home//banner/Banner'
import Header from '../../components/home//header/Header'
import HomePageRow from '../../components/home/main contents/HomePageRow'
import './HomePage.css'
import apiEndpoints from '../../apiEndpoints'
import { useSelector } from 'react-redux'
import { selectRowCardWithMoreDetails } from '../../features/rowCardWithMoreDetailsSlice'
import RowCardWithMoreDetails from '../../components/home/main contents/RowCardWithMoreDetails'
import axiosConfig from '../../axiosConfig'
import {AnimatePresence} from 'framer-motion'
import PreviewModel from '../../components/home/main contents/PreviewModel'
import { Route, Routes} from 'react-router-dom'

function HomePage() {
  const rowCardWithMoreDetailsValue = useSelector(selectRowCardWithMoreDetails);
  const [genresList,setGenresList] = useState([]);
  
  useEffect(()=>{
    const fetchData = async ()=>{
        const res = await axiosConfig.get(apiEndpoints.tvShowGenresList);
        setGenresList(res.data.genres)
    }
    fetchData();
  },[])

  return (
    <div className='homePage'>
      <Header/>
      <Banner/>
      <div className="homePage__mainContents">
          <HomePageRow rowTitle='top rated tv shows' apiUrl={apiEndpoints.topRatedTvShows} showType='tvshow'/>
          <HomePageRow rowTitle='top rated movies' apiUrl={apiEndpoints.topRatedMovies} showType='movie'/>
          <HomePageRow rowTitle='current popular movies' apiUrl={apiEndpoints.currentPopularMovies} showType='movie'/>
          <HomePageRow rowTitle='current popular tv shows' apiUrl={apiEndpoints.popularTvShows} showType='tvshow'/>
          <HomePageRow rowTitle='now playing movies' apiUrl={apiEndpoints.nowPlayingMovies} showType='movie'/>
          <HomePageRow rowTitle='upcoming movies' apiUrl={apiEndpoints.upcomingMovies} showType='movie'/>
      </div>
        <AnimatePresence mode='wait'>{rowCardWithMoreDetailsValue.isOpen && <RowCardWithMoreDetails key='rowCardWithMoreDetails' genresList={genresList}/>}</AnimatePresence>
        <Routes>
          <Route path='title/:showType/:id' element={<AnimatePresence mode='await'><PreviewModel genresList={genresList}/></AnimatePresence>}/>
        </Routes>
    </div>
  )
}

export default HomePage