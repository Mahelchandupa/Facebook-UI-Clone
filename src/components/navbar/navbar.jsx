import React, { useContext } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';


const Navbar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);



  return (
    <div className='navbar'>
       <div className="left">
          <Link to="/" style={{textDecoration: "none"}}>
            <span>fakesocial</span>
          </Link>
          <HomeOutlinedIcon/>
          {darkMode ? (
            <WbSunnyOutlinedIcon onClick={toggle}/>
          ): (
            <DarkModeOutlinedIcon onClick={toggle}/>
          )
        }
          <GridViewOutlinedIcon/>
          <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" name="" id="" placeholder='Search' />
          </div>
       </div>
       <div className="right">
         <PersonOutlinedIcon/>
         <EmailOutlinedIcon/>
         <NotificationsOutlinedIcon/>
         <Link to="/profile/1" style={{textDecoration:"none"}}>
         <div className="user">
            <img src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>Mahel</span>
         </div>
         </Link>
       </div>
    </div>
  )
}

export default Navbar