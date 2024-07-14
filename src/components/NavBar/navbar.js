import React from 'react'
import './navbar.css'
import { Link}  from'react-scroll';
import  contactImg  from '../../Assets/contact.png' 
import logo from '../../Assets/Bromen Logo.png'
const Navbar = () => {
  return (
<nav className='navbar'> 
    <img  src={logo} alt='logo' className='logo'/>
    <div className='desktopMenu'>
 <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  lassName='desktopMenuListItem'>Home</Link>
 <Link  activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
 <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
 <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500}className='desktopMenuListItem'>Clients</Link>
    </div>
    <button className='desktopMenubtn' >
    <img  src={contactImg} alt='contactImg' className='desktopMenuImg'/>Contact Me</button>

</nav> 


  )
}

export default Navbar
 
 