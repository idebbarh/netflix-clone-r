import React from "react";
import "./MoreLikeThisCard.css";
import AddIcon from '@mui/icons-material/Add';
import CardOptions from "./CardOptions";
import apiEndpoints from "../../../apiEndpoints";
import { truncateMovieStoryString } from "../banner/Banner";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";
import CheckIcon from '@mui/icons-material/Check';
function MoreLikeThisCard({ cardData,showType }) {
    const user = useSelector(selectUser);
  return <div className="moreLikeThisCard">
            <div className="moreLikeThisCard__image">
                <img src={`${apiEndpoints.imageBaseURL}/${cardData?.backdrop_path}`} alt={cardData?.title ? cardData?.title : cardData?.name} />
            </div>
            <div className="moreLikeThisCard__details">
                <div className="moreLikeThisCard__detailsTop">
                    <h4 className="moreLikeThisCard__title">{cardData?.title ? cardData?.title : cardData?.name}</h4>
                    <CardOptions Icon={user?.userActiveProfile.profileFavList?.map(fav=>fav.id).includes(cardData.id) ? CheckIcon : AddIcon} isAddToMyList={true} showType={showType} data={cardData} isThisInFavList={user?.userActiveProfile.profileFavList?.map(fav=>fav.id).includes(cardData.id) ? true : false}/>
                </div>
                <div className="moreLikeThisCard__detailsBottom">
                    <p className="moreLikeThisCard__story">{truncateMovieStoryString(cardData?.overview,200)}</p>
                </div>
            </div>
        </div>;
}

export default MoreLikeThisCard;
