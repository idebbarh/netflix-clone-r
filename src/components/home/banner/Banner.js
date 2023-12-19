import React, { useEffect, useState } from "react";
import "./Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import axiosConfig from "../../../axiosConfig";
import apiEndpoints from "../../../apiEndpoints";
import { useNavigate } from "react-router-dom";
export function truncateMovieStoryString(string, size) {
  return string?.substr(0, size) + "...";
}
function Banner() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosConfig.get(apiEndpoints.popularTvShows);
      setData(
        res.data.results[Math.floor(Math.random() * res.data.results.length)],
      );
    };
    fetchData();
  }, []);
  const moreInfoHandler = () => {
    navigate(`title/${"tvshow"}/${data.id}`);
  };
  return (
    <div
      className="banner"
      style={data ? { height: "auto" } : { height: "100vh" }}
    >
      <img
        src={`${apiEndpoints.imageBaseURL}/${data?.backdrop_path}`}
        alt={data?.name}
        className="banner__image"
      />
      <div className="banner__movieInfo">
        <h1 className="banner__movieTitle">{data?.name}</h1>
        <p className="banner__movieStory">
          {truncateMovieStoryString(data?.overview, 150)}
        </p>
        <div className="banner__btns">
          <button className="banner__btn btn--play">
            <PlayArrowIcon />
            play
          </button>
          <button
            className="banner__btn btn--moreInfo"
            onClick={moreInfoHandler}
          >
            <InfoIcon />
            more info
          </button>
        </div>
      </div>
      <div className="banner__gradient"></div>
    </div>
  );
}

export default Banner;
