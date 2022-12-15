import React, { useEffect, useMemo, useRef, useState } from 'react'
import axiosConfig from '../../../axiosConfig';
import './HomePageRow.css'
import RowCard from './RowCard';
import RowTitle from './RowTitle'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { selectUser } from '../../../features/userSlice';
import { useSelector } from 'react-redux';
function HomePageRow({rowTitle,apiUrl,isWatchList=false,showType}) {
    const [rowData,setRowData] = useState([]);
    const [sliderVal,setSliderVal] = useState(0);
    const [isMouseOnHomePageRow,setIsMouseOnHomePageRow] = useState(false);
    const lastCardRef = React.createRef();
    const isInTheTailOfSlide = useIsInViewport(lastCardRef);
    const sliderRef = useRef();
    const user = useSelector(selectUser)
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axiosConfig.get(apiUrl);
            setRowData(res.data.results)
        }
        if(!isWatchList){
          fetchData()
        }else{
         setRowData(user.userFavList)
        }
    },[apiUrl,(isWatchList ? user.userFavList : null)]);
    const moveSliderRight = ()=>{
    //     sliderRef.current.scrollBy(sliderRef.current.clientWidth,0);
    //    if(sliderRef.current.scrollWidth - sliderRef.current.scrollLeft === sliderRef.current.clientWidth){
    //         sliderRef.current.scrollTo(0,0)
    //    }
        if(!isInTheTailOfSlide){
            setSliderVal(prevState=>prevState-100)
        }else{
            setSliderVal(0);
        }
    }
    const moveSliderLeft = ()=>{
        // sliderRef.current.scrollBy(-sliderRef.current.clientWidth,0);
        setSliderVal(prevState=>prevState+100)
    }
    const rowHoverHandler = ()=>{
        setIsMouseOnHomePageRow(true);
    }
    const rowHoverOutHandler = ()=>{
        setIsMouseOnHomePageRow(false);
    }

    const cardsElem = rowData.map((item)=>{
        return (isWatchList || item.backdrop_path) && <RowCard isId={isWatchList ? true : false} cardData={item} key={item.id} ref={lastCardRef} showType={isWatchList ? item.showType : showType}/>
    })
    
  return (
    <div className='homePageRow' onMouseEnter={rowHoverHandler} onMouseLeave={rowHoverOutHandler} > 
        <RowTitle rowTitle={rowTitle}/>
        <div className='homePageRow__sliderArrow sliderArrow--left' style={{display:`${isMouseOnHomePageRow && sliderVal !== 0 ? 'flex' : 'none'}`,height:`${sliderRef.current?.offsetHeight}px`}} onClick={moveSliderLeft}><ArrowBackIosNewIcon/></div>
        <div className='homePageRow__sliderArrow sliderArrow--right' style={{display:`${isMouseOnHomePageRow ? 'flex' : 'none'}`,height:`${sliderRef.current?.offsetHeight}px`}} onClick={moveSliderRight}><ArrowForwardIosIcon/></div>
        <div className="homePageRow__darkSide darkSide--left" style={{display:`${sliderVal !== 0 ? 'block' : 'none'}`,height:`${sliderRef.current?.offsetHeight}px`}}></div>
        <div className="homePageRow__darkSide darkSide--right" style={{display:`${sliderVal !== 0 ? 'block' : 'none'}`,height:`${sliderRef.current?.offsetHeight}px`}}></div>
        <div className="homePageRow__row" style={{transform:`translate3d(${sliderVal}%, 0px, 0px)`}} ref={sliderRef}>
            {cardsElem}
        </div>
    </div>
  )
}
function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      []
    );
  
    useEffect(() => {
        if(ref.current){
            observer.observe(ref.current);
        }
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }
export default HomePageRow