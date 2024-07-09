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
 <Link className='desktopMenuListItem'>Home</Link>
 <Link className='desktopMenuListItem'>About</Link>
 <Link className='desktopMenuListItem'>Portfolio</Link>
 <Link className='desktopMenuListItem'>Clients</Link>
    </div>
    <button className='desktopMenubtn'>
    <img  src={contactImg} alt='contactImg' className='desktopMenuImg'/>Contact Me</button>

</nav> 

  )
}

export default Navbar
 
 