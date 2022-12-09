import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axiosConfig from '../../../axiosConfig';
import { selectHomePageSearchBarValue } from '../../../features/homePageSearchBarValueSlice';
import RowCard from '../main contents/RowCard';
import './SearchSection.css'
import {motion} from 'framer-motion'
function SearchSection() {
    const [searchData,setSearchData] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;
    const homePageSearchBarValue = useSelector(selectHomePageSearchBarValue);

    useEffect(()=>{
        const fetchData = async ()=>{

            const moviesRes = await axiosConfig(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${homePageSearchBarValue}&language=en-US&page=1`);
            const tvRes = await axiosConfig(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${homePageSearchBarValue}&language=en-US&page=1`);
            const moviesData = moviesRes.data.results.map(item=>({...item,'showType':'movie'}))
            const tvShowsData = tvRes.data.results.map(item=>({...item,'showType':'tvshow'}))
            setSearchData([...moviesData,...tvShowsData])
        }   
        if(homePageSearchBarValue.length > 0){
            fetchData();
        }
    },[apiKey,homePageSearchBarValue])
    const cardsElem = searchData.map((item)=>{
        return item.backdrop_path && <RowCard cardData={item} key={item.id} showType={item.showType}/>
    })
    return (
        <motion.div className='searchSection' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3,delay:1}}>
            <div className="searchSection__searchContent">
                <div className="searchSection__cardsContainer">
                    {cardsElem}
                </div>
            </div>
        </motion.div>
  )
}

export default SearchSection