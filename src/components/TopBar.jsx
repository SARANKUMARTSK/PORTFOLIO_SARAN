import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


function TopBar({darkMode,setDarkMode}) {
    let [nav,setNave]= useState(true)
    const handleNavbar = ()=>{
        setNave(!nav)
    }
    const handleMode = ()=>{
      setDarkMode(!darkMode)
      }
    
  return <>
  <div className={nav?'navbar nav_height_fixed':'navbar nav_height_auto'} id={darkMode?"bg_black":"bg-white"}>
      <div className='navbar_left'>
        <h1>SARAN KUMAR</h1>
      </div>
      <div className={nav?'navbar_right nav_a_show':""}>
        
        <Link to='about' smooth={true} duration={800}>
             <h4>About_Me</h4>
        </Link>
        <Link to='skills' smooth={true} duration={800}>
             <h4>Skills</h4>
        </Link>
        <Link to='projects' smooth={true} duration={800}>
              <h4>Projects</h4>
        </Link>
        <Link to='experience' smooth={true} duration={800}>
              <h4>Experience</h4>
        </Link>
        <Link to='contact' smooth={true} duration={800}>
              <h4>Contact</h4>
        </Link>
    <div className='mode_icon' onClick={()=>handleMode()}>{darkMode?<LightModeIcon/>:<DarkModeIcon/>}</div>

    </div>
    <div  className='show_menu' >
    <FontAwesomeIcon icon={faBars} onClick={()=>handleNavbar()} />
    </div>

    
  </div>
  </>
}

export default TopBar