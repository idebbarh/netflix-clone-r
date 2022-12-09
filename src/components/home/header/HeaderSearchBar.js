import React, { useState } from 'react'
import './HeaderSearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {motion,AnimatePresence} from 'framer-motion'
import { selectHomePageSearchBarValue, setHomePageSearchBarValue } from '../../../features/homePageSearchBarValueSlice';
import { useDispatch, useSelector } from 'react-redux';
function HeaderSearchBar() {
    const [isSearchInputOpen,setIsSearchInputOpen] = useState(false);
    const homePageSearchBarValue = useSelector(selectHomePageSearchBarValue);
    const dispatch = useDispatch();

    const searchInputValueUpdater = (e)=>{
      dispatch(setHomePageSearchBarValue(e.target.value))
    }
    const closeSearchInput = ()=>{
      dispatch(setHomePageSearchBarValue(''))
      setIsSearchInputOpen(false);
    }
  return (
    <div className='headerSearchBar'>
      {isSearchInputOpen ? 
          <AnimatePresence>
              <motion.div className="headerSearchBar__inputContainer" 
                      key={'inputContainer'}
                      initial={{ opacity: 0 ,width:100}}
                      animate={{ opacity: 1 ,width:'fit-content'}}
                      transition={{ duration: 0.3 }}
                      >
                      <SearchIcon className='headerSearchBar__searchIcon'/>
                      <input type="text" className='headerSearchBar__input' placeholder='title, people, genres' value={homePageSearchBarValue} onChange={(e)=>searchInputValueUpdater(e)}/>
                      <CloseIcon className="headerSearchBar__searchIcon" onClick={closeSearchInput}/>
              </motion.div> 
          </AnimatePresence> : 
        <SearchIcon className='headerSearchBar__searchIcon' onClick={()=>setIsSearchInputOpen(true)}/>}
    </div>
  )
}

export default HeaderSearchBar