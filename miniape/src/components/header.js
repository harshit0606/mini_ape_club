import React,{useState} from 'react';
import Logo from "../images/Logoo.png"

import "../styles/header.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate();
   const [mobileMenuOpen,setMobileMenuOpen]=useState(false); 

  function handleOpen(e){
    e.preventDefault();
    setMobileMenuOpen(!mobileMenuOpen);
  }
   const handleClick = (e, path) => {
    e.preventDefault()
 
     if (path === "/#roadmap") {
       setMobileMenuOpen(false);
       navigate(path)
     }
     if (path === "/#team") {
      setMobileMenuOpen(false);
        navigate(path)
     }
     if (path === "/#lore") {
      setMobileMenuOpen(false);
      navigate(path)
   }
   }; 

  return (
  <div>
  <div className="Header">
  <div className="logo_div">
  <img src={Logo}/>
  </div>
  <div className="links">
  <a href="/#lore">Lore</a>
  <a href="/#roadmap">Roadmap</a>
  <a href="/#team">Team</a>
  
  </div>
  <div className="Ham">
  <GiHamburgerMenu onClick={handleOpen} style={{color:"white",fontSize:"30px"}}/>
  </div>
  </div>
  {mobileMenuOpen &&
  (<div className="mobileMenu">
    <div className='mobileLinks'>
    <a  onClick={(e)=>handleClick(e,"/#lore")} href="/#lore" >Lore</a>
    <a onClick={(e)=>handleClick(e,"/#roadmap")} href="/#roadmap">Roadmap</a>
    <a onClick={(e)=>handleClick(e,"/#team")} href="/#team">Team</a>
    </div>
  </div>)
}

  </div>);

}

export default Header;
