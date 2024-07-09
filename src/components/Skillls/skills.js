import React from 'react'
import './skills.css'
import UiDesign from '../../Assets/ui-ux.jpg'
import WebDesign from '../../Assets/website-Design.jpg'
import AppDesing from '../../Assets/App-Desing.jpg'

const Skills = () => {
  return (
   
   <section id='skills'> 
<span className='skillTitle'> What I do</span>
<span className='skillDesc'> Full-stack engineer with a strong foundation in computer and software engineering.
 Proficient in Node.js, React.js, Java, and more, with a passion for developing robust software solutions. Skilled
  in strategy analysis and eager to explore collaborative opportunities.</span>
  <div className='skillBalls'>
  <div className='skillBar'>
<img src={UiDesign} alt='UiDesign' className='skillBarImg'/>
<div className='skillBarText'>
  <h2>UI/UX Design</h2>
  <p>We provide UI design for visually appealing layouts and UX design to ensure seamless, user-friendly experiences.</p>
</div>
</div>

<div className='skillBar'>
<img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
<div className='skillBarText'>
  <h2>Web Design</h2>
  <p>We offer web design services that combine stunning visuals with intuitive, user-friendly experiences.</p>
</div>
</div>

<div className='skillBar'>
<img src={AppDesing} alt='AppDesign' className='skillBarImg'/>
<div className='skillBarText'>
  <h2> App Design</h2>
  <p>We offer app design services that blend beautiful interfaces with seamless, user-friendly experiences.</p>
</div>
</div>
  </div>
   </section>
  )
}

export default Skills
 