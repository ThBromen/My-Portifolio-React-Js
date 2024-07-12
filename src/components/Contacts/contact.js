import React from 'react';
import "./contact.css"
import client1 from '../../Assets/client1.jpg';
import client2 from '../../Assets/client2.jpg';
import client3 from '../../Assets/client3.jpg';
import client4 from '../../Assets/client4.jpg';
import watsup from '../../Assets/whatsapp icon.png';
import instagram from '../../Assets/instagram icon.png';
import linkedIn from '../../Assets/linkedin icon.png';
import youtube from '../../Assets/youtube icon.png';
import Twiter from '../../Assets/twitter icon.png';
import facebook from '../../Assets/facebook icon.png';
import tickTock from '../../Assets/tik-tok icon.png';
import microsoft from '../../Assets/microsoft icon.png'
import email from '../../Assets/gmail icon.png'

const Contact = () => {
  return (
    <section id='contactPage'>
      <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientsDesc'>
          We collaborated with TechSolutions Inc. to develop a custom web
          application that streamlined their project management processes, enhancing operational
          efficiency with an intuitive UI and robust backend.
        </p>
        <div className='clientImgs'>
          <div className='clientComp'>
            <img src={client1} alt='client 1' className='clientImg' />
            <div className='clientDetails'>
              <span className='clientName'>Emily Davis </span>
              <span className='clientPosition'>CEO of Alex Johnson Enterprises </span>
              <button className='clientBtn'>Contact</button>
            </div>
          </div>
          <div className='clientComp'>
            <img src={client2} alt='client 2' className='clientImg' />
            <div className='clientDetails'>
              <span className='clientName'>Michael Thompson </span>
              <span className='clientPosition'>CTO of Sierra Tech Innovations </span>
              <button className='clientBtn'>Contact</button>
            </div>
          </div>
          <div className='clientComp'>
            <img src={client3} alt='client 3' className='clientImg' />
            <div className='clientDetails'>
              <span className='clientName'>Sarah Martinez </span>
              <span className='clientPosition'>Project Manager  </span>
              <button className='clientBtn'>Contact</button>
            </div>
          </div>
          <div className='clientComp'>
            <img src={client4} alt='client 4' className='clientImg' />
            <div className='clientDetails'>
              <span className='clientName'>David Lee  </span>
              <span className='clientPosition'>Head of Development  </span>
              <button className='clientBtn'>Contact</button>
            </div>
          </div>
        </div>
      </div>

      <div id='contact'>
  <h1 className='contactPageTitle'>Contact Me</h1>
  <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
  <form className='contactForm'>
    <input type='text' className='name' placeholder='Your name' />
    <input type='email' className='email' placeholder='Your Email' />
    <textarea rows={5} placeholder='Your Message' className='msg'></textarea>
    <button type='submit' className='submitBtn'>Submit</button>
    <div className='links'>
      <img src={instagram} alt='Instagram' className='link' />
      <img src={tickTock} alt='TikTok' className='link' />
      <img src={watsup} alt='WhatsApp' className='link' />
      <img src={linkedIn} alt='LinkedIn' className='link' />
      <img src={youtube} alt='YouTube' className='link' />
      <img src={Twiter} alt='Twitter' className='link' />
      <img src={facebook} alt='Facebook' className='link' />
      <img src={microsoft} alt='microsoft' className='link' />
      <img src={email} alt='email' className='link' />
    </div>
  </form>
</div>

    </section>
  );
};

export default Contact;