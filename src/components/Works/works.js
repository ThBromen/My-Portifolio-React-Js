import React from 'react';
import './works.css';
import { Link } from 'react-scroll';
import MobileApp from '../../Assets/pexels-Phone.jpg';
import Portfolio from '../../Assets/portfolio.png';
import WebDesign from '../../Assets/design.jpg';
import Design from '../../Assets/designUX.jpg';
import Database from '../../Assets/Database.jpg';
import Software from '../../Assets/Blog-site.jpg';

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>The portfolio section displays diverse projects I've developed as a full-stack engineer, encompassing web design, mobile apps, and software solutions. Each project demonstrates my expertise in Node.js, React.js, Java, and other technologies.</span>

      <div className='worksImgs'>
        <div className='workComp'>
          <h2>Portfolio</h2>
          <img src={Portfolio} alt='Portfolio' className='worksImg' />
          <Link to=''><button className='btn'> View </button></Link>
        </div>
        <div className='workComp'>
          <h2>Web Design</h2>
          <img src={WebDesign} alt='Web Design' className='worksImg' />
          <Link to=''><button className='btn'> View </button></Link>
        </div>
        <div className='workComp'>
          <h2>Mobile App</h2>
          <img src={MobileApp} alt='Mobile App' className='worksImg' />
          <Link to=''><button className='btn'> View </button></Link>
        </div>
        <div className='workComp'>
          <h2>Blog Design</h2>
          <img src={Design} alt='Blog Design' className='worksImg' />
          <Link to=''><button className='btn'> View </button></Link>
        </div>
        <div className='workComp'>
          <h2>Database Design</h2>
          <img src={Database} alt='Database Design' className='worksImg' />
          <Link to=''><button className='btn'>View </button></Link>
        </div>
        <div className='workComp'>
          <h2>Software Design</h2>
          <img src={Software} alt='Software Design' className='worksImg' />
          <Link to=''><button className='btn'> View </button></Link>
        </div>
      </div>
      <button className='worksBtn'> See More </button>
    </section>
  );
}

export default Works;
