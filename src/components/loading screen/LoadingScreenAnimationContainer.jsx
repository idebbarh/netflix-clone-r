import React from "react";
import './LoadingScreenAnimationContainer.css'
import netflixLogo from '../../assets/images/Netflix_logo.png';




function LoadingScreenAnimationConatainer(){

    return(
        <div className="loadingScreenAnimationConatainer">
            <div className="loadingScreenAnimationConatainerCercle"/>
            <img src={netflixLogo} alt="netflix logo"/>     
        </div>
    )
} 

export default LoadingScreenAnimationConatainer
