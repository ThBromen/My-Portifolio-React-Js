import React, { useRef } from 'react';
import "./contact.css";
// import { Link } from 'react-scroll';
import client1 from '../../Assets/client1.jpg';
import client2 from '../../Assets/client2.jpg';
import client3 from '../../Assets/client3.jpg';
import client4 from '../../Assets/client4.jpg';
import whatsapp from '../../Assets/whatsapp icon.png';
import instagram from '../../Assets/instagram icon.png';
import linkedIn from '../../Assets/linkedin icon.png';
import twitter from '../../Assets/twitter icon.png';
import facebook from '../../Assets/facebook icon.png';
import tickTock from '../../Assets/tik-tok icon.png';
import github from '../../Assets/github.png';
import email from '../../Assets/gmail icon.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i7ia4bp', 'template_5s01lye', form.current, {
        publicKey: 'Cxilq_a1kEJx0a4ov',
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert ('Email sent !');
        }, 
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
              <span className='clientName'>Emily Davis</span>
              <span className='clientPosition'>CEO of Alex Johnson Enterprises</span>
              <button className='clientBtn'>Contact</button>
            </div>
            
          </div>
          <div className='clientComp'>
            <img src={client2} alt='client 2' className='clientImg' />
            <div className='clientDetails'>
              <span className='clientName'>Michael Thompson</span>
              <span className='clientPosition'>CTO of Sierra Tech Innovations</span>
              <button className='clientBtn'>Contact</button>
            </div>
          </div>
          <div className='clientComp'>
            <img src={client3} alt='client 3' className='clientImg' />
            <div className='clientDetails'>
              <span className='clientName'>Sarah Martinez</span>
              <span className='clientPosition'>Project Manager</span>
              <button className='clientBtn'>Contact</button>
            </div>
          </div>
          <div className='clientComp'>
            <img src={client4} alt='client 4' className='clientImg' />
            <div className='clientDetails'>
              <span className='clientName'>David Lee</span>
              <span className='clientPosition'>Head of Development</span>
              <button className='clientBtn'>Contact</button>
            </div>
          </div>
        </div>
      </div>

      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your name' name='your_name' />
          <input type='email' className='email' placeholder='Your Email' name='your_email' />
          <textarea rows={5} placeholder='Your Message' className='msg' name='message'></textarea>
          <button type='submit' className='submitBtn'>Submit</button>

          <div className='links'>
      <a href='https://www.instagram.com/theogene_250' target='_blank' rel='noopener noreferrer'>
        <img src={instagram} alt='Instagram' className='link' />
      </a>
      <a href='https://www.tiktok.com/@bromen92?_t=8o40FH6dR3N&_r=1' target='_blank' rel='noopener noreferrer'>
        <img src={tickTock} alt='TikTok' className='link' />
      </a>
      <a href='https://wa.me/250784020043' target='_blank' rel='noopener noreferrer'>
        <img src={whatsapp} alt='WhatsApp' className='link' />
      </a>
      <a href='https://www.linkedin.com/in/hashimwimana-theogene' target='_blank' rel='noopener noreferrer'>
        <img src={linkedIn} alt='LinkedIn' className='link' />
      </a>
      <a href='https://x.com/Theogene_Bromen' target='_blank' rel='noopener noreferrer'>
        <img src={twitter} alt='Twitter' className='link' />
      </a>
      <a href='https://www.facebook.com/theogene.hashimwimana' target='_blank' rel='noopener noreferrer'>
        <img src={facebook} alt='Facebook' className='link' />
      </a>
      <a href='https://github.com/ThBromen' target='_blank' rel='noopener noreferrer'>
        <img src={github} alt='GitHub' className='link' />
      </a>
      <a href='mailto:hashimwimanatheogene34@gmail.com'>
        <img src={email} alt='Email' className='link' />
      </a>
    </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
