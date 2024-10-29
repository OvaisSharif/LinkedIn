import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import linkedinIcon from "./images/linkedin-icon.svg" 

function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <img src={linkedinIcon} alt='linkedin-logo'/>
        <div className='header_search'>
            <SearchIcon/>
            <input type='text'/>
        </div>
      </div>
      <div className='header_right'></div>
    </div>
  )
}

export default Header
