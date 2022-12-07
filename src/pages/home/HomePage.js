import React from 'react'
import Banner from '../../components/home//banner/Banner'
import Header from '../../components/home//header/Header'
import HomePageRow from '../../components/home/main contents/HomePageRow'
import './HomePage.css'
import apiEndpoints from '../../apiEndpoints'

function HomePage() {
  return (
    <div className='homePage'>
      <Header/>
      <Banner/>
      <div className="homePage__mainContents">
        <HomePageRow rowTitle='top rated tv shows' apiUrl={apiEndpoints.topRatedTvShows}/>
        <HomePageRow rowTitle='top rated movies' apiUrl={apiEndpoints.topRatedMovies}/>
        <HomePageRow rowTitle='current popular movies' apiUrl={apiEndpoints.currentPopularMovies}/>
        <HomePageRow rowTitle='current popular tv shows' apiUrl={apiEndpoints.popularTvShows}/>
        <HomePageRow rowTitle='now playing movies' apiUrl={apiEndpoints.nowPlayingMovies}/>
        <HomePageRow rowTitle='upcoming movies' apiUrl={apiEndpoints.upcomingMovies}/>
      </div>
    </div>
  )
}

export default HomePage