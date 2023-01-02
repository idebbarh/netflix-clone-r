import React, { useEffect, useState } from "react";
import Banner from "../../../components/home/banner/Banner";
import Header from "../../../components/home/header/Header";
import HomePageRow from "../../../components/home/main contents/HomePageRow";
import "./HomePage.css";
import apiEndpoints from "../../../apiEndpoints";
import { useDispatch, useSelector } from "react-redux";
import { selectRowCardWithMoreDetails } from "../../../features/rowCardWithMoreDetailsSlice";
import RowCardWithMoreDetails from "../../../components/home/main contents/RowCardWithMoreDetails";
import axiosConfig from "../../../axiosConfig";
import { AnimatePresence } from "framer-motion";
import PreviewModel from "../../../components/home/main contents/PreviewModel";
import { Navigate, Route, Routes } from "react-router-dom";
import { selectHomePageSearchBarValue } from "../../../features/homePageSearchBarValueSlice";
import SearchSection from "../../../components/home/search/SearchSection";
import { selectUser } from "../../../features/userSlice";
import Profiles from "../profiles/Profiles";

function HomePage() {
  const rowCardWithMoreDetailsValue = useSelector(selectRowCardWithMoreDetails);
  const [genresList, setGenresList] = useState([]);
  const homePageSearchBarValue = useSelector(selectHomePageSearchBarValue);
  const user = useSelector(selectUser);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosConfig.get(apiEndpoints.tvShowGenresList);
      setGenresList(res.data.genres);
    };
    fetchData();
  }, [user?.userEmail]);

  return user.isLogin ? (
    user?.userActiveProfile ? (
      <div className="homePage">
        <Header />
        <AnimatePresence mode="wait">
          {homePageSearchBarValue.length > 0 ? (
            <SearchSection key="searchSection" />
          ) : (
            <>
              <Banner />
              <div className="homePage__mainContents">
                {user.userActiveProfile.profileFavList.length > 0 && (
                  <HomePageRow
                    rowTitle="my list"
                    isWatchList={true}
                    key="my list"
                  />
                )}
                <HomePageRow
                  rowTitle="top rated tv shows"
                  apiUrl={apiEndpoints.topRatedTvShows}
                  showType="tvshow"
                  key="top rated tv shows"
                />
                <HomePageRow
                  rowTitle="top rated movies"
                  apiUrl={apiEndpoints.topRatedMovies}
                  showType="movie"
                  key="top rated movies"
                />
                <HomePageRow
                  rowTitle="current popular movies"
                  apiUrl={apiEndpoints.currentPopularMovies}
                  showType="movie"
                  key="current popular movies"
                />
                <HomePageRow
                  rowTitle="current popular tv shows"
                  apiUrl={apiEndpoints.popularTvShows}
                  showType="tvshow"
                  key="current popular tv shows"
                />
                <HomePageRow
                  rowTitle="now playing movies"
                  apiUrl={apiEndpoints.nowPlayingMovies}
                  showType="movie"
                  key="now playing movies"
                />
                <HomePageRow
                  rowTitle="upcoming movies"
                  apiUrl={apiEndpoints.upcomingMovies}
                  showType="movie"
                  key="upcomit movies"
                />
              </div>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {rowCardWithMoreDetailsValue.isOpen && (
            <RowCardWithMoreDetails
              genresList={genresList}
              key="rowCardWithMoreDetails"
            />
          )}
        </AnimatePresence>
        <Routes>
          <Route
            path="title/:showType/:id"
            element={
              <AnimatePresence mode="await">
                <PreviewModel genresList={genresList} />
              </AnimatePresence>
            }
          />
        </Routes>
      </div>
    ) : (
      <Profiles />
    )
  ) : (
    <Navigate replace to="/login" />
  );
}

export default HomePage;
