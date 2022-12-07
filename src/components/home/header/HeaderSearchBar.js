import React, { useState } from 'react'
import './HeaderSearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {motion,AnimatePresence} from 'framer-motion'
function HeaderSearchBar() {
    const [isSearchInputOpen,setIsSearchInputOpen] = useState(false);
    const [searchInputValue,setSearchInputValue] = useState('');

    const searchInputValueUpdater = (e)=>{
      setSearchInputValue(e.target.value)
    }
    const closeSearchInput = ()=>{
      setSearchInputValue('')
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
                      <input type="text" className='headerSearchBar__input' placeholder='title, people, genres' value={searchInputValue} onChange={(e)=>searchInputValueUpdater(e)}/>
                      <CloseIcon className="headerSearchBar__searchIcon" onClick={closeSearchInput}/>
              </motion.div> 
          </AnimatePresence> : 
        <SearchIcon className='headerSearchBar__searchIcon' onClick={()=>setIsSearchInputOpen(true)}/>}
    </div>
  )
}

export default HeaderSearchBar