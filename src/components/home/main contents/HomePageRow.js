import React, { useEffect, useMemo, useState } from 'react'
import axiosConfig from '../../../axiosConfig';
import './HomePageRow.css'
import RowCard from './RowCard';
import RowTitle from './RowTitle'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
function HomePageRow({rowTitle,apiUrl,isWatchList=false}) {
    const [rowData,setRowData] = useState([]);
    const [sliderVal,setSliderVal] = useState(0);
    const [isMouseOnHomePageRow,setIsMouseOnHomePageRow] = useState(false);
    const lastCardRef = React.createRef();
    const isInTheTailOfSlide = useIsInViewport(lastCardRef);

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axiosConfig.get(apiUrl);
            setRowData(res.data.results)
        }
        fetchData()
    },[apiUrl]);

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
        return item.backdrop_path && <RowCard cardData={item} key={item.id} rowHoverOutHandler={rowHoverOutHandler} rowHoverHandler={rowHoverHandler} ref={lastCardRef}/>
    })
    
  return (
    <div className='homePageRow' onMouseEnter={rowHoverHandler} onMouseLeave={rowHoverOutHandler} > 
        <RowTitle rowTitle={rowTitle}/>
        <li className='homePageRow__sliderArrow sliderArrow--left' style={{display:`${isMouseOnHomePageRow && sliderVal !== 0 ? 'flex' : 'none'}`}} onClick={moveSliderLeft}><ArrowBackIosNewIcon/></li>
        <li className='homePageRow__sliderArrow sliderArrow--right'style={{display:`${isMouseOnHomePageRow ? 'flex' : 'none'}`}} onClick={moveSliderRight}><ArrowForwardIosIcon/></li>
        <div className="homePageRow__row" style={{transform:`translate3d(${sliderVal}%, 0px, 0px)`}}>
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