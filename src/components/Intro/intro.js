import React from 'react'
import "./intro.css"
import { Link}  from'react-scroll';
import bg from "../../Assets/PXL_new.png"
import btnImg from"../../Assets/hire.png"
const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
  <span className='hello'>Hello,</span>
  <span className='introText'>I'm <span className='introName'>H. Theogene</span><br/>Full-Stack Engineer!</span>
  <p className='introPara'>Full-stack Engineer with a background in computer and software engineering.<br/>
     Skilled in Node.js, React.js, CSS, HTML, Java, and React Native. Excels in strategy analysis <br/>
     and passionate about software development. Let's connect to explore collaborative opportunities.</p>
  <Link to='/contact'><button className='btn'><img src={btnImg} alt='Hire me' /> Hire me</button></Link>
</div>

<img src={bg} Alt="" className='bg'></img>
    </section>
  )
}
export default Intro
  