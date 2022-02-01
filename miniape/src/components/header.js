import React,{useState} from 'react';
import Logo from "../images/thugg.png"
import "../styles/header.css"

function Header() {

   const [mobileMenuOpen,setMobileMenuOpen]=useState(false); 


  return <div className="Header">
  <div className="logo_div">
  <img src={Logo}/>
  </div>
  <div className="links">
  <a>Lore</a>
  <a>Roadmap</a>
  <a>Team</a>
  </div>

  </div>;
}

export default Header;
