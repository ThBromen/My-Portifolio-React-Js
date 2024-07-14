import React, { useState } from 'react'
import './navbar.css'
import { Link}  from'react-scroll';
import  contactImg  from '../../Assets/contact.png' 
import logo from '../../Assets/Bromen Logo.png'
import menu from "../../Assets/menu.png"
const Navbar = () => {
const [showMenu, setShoMenu] = useState(false);
  return (
<nav className='navbar'> 
    <img  src={logo} alt='logo' className='logo'/>
    <div className='desktopMenu'>
 <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  lassName='desktopMenuListItem'>Home</Link>
 <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
 <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
 <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenuListItem'>Clients</Link>
 
    </div>
    <button className='desktopMenubtn'onClick={()=>{
      document.getElementById("contact").scrollIntoView('behavior');
    }} >
    <img  src={contactImg} alt='contactImg' className='desktopMenuImg'/>Contact Me</button>



    <img  src={menu} alt='menu' className='mobMenu'  onClick={()=>{setShoMenu(!showMenu)}}/>
    <div className='navMenu'  style={{ display:showMenu? 'flex':'none'}}  >
 <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  lassName='listItem' onClick={()=>{setShoMenu(false)}}>Home</Link>
 <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>{setShoMenu(false)}}>About</Link>
 <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>{setShoMenu(false)}}>Portfolio</Link>
 <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>{setShoMenu(false)}}>Clients</Link>
 <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>{setShoMenu(false)}}>Contact</Link>
 
    </div>
</nav> 

  )
}

export default Navbar
 
 