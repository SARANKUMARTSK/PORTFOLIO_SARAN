import React from 'react'
import myImage from '../assets/my_images/myImage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin , faInstagram , faFacebook } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import resume from '../assets/resume/myResume.pdf'
import { Link } from 'react-scroll';

function About() {
  
   

    
  return <>
  <div name='about' className="about_page" >
    <div className="about_content">
       <div className='name_container'>
       <h1>Hello, I am <span>SARAN KUMAR T</span></h1>
       {
         <TypeAnimation
         sequence={[
           'Full Stack Developer',
           2000, 
           'MERN Stack Developer',
           2000,
         ]}
         wrapper="span"
         speed={50}
         style={{ fontSize: '2em', display: 'inline-block' }}
         repeat={Infinity}
       />
       }
       </div>

       <div className='button_container'>
          <button><a href={resume} style={{textDecoration:"none", color:"inherit"}}>Download CV</a></button>
          <button><Link to='projects'>My Work</Link></button>
       </div>

       <div className="icon_container" >
       <a href="https://github.com/SARANKUMARTSK" ><FontAwesomeIcon icon={faGithub}  /></a>
       <a href="https://www.linkedin.com/in/saran-kumar-17563a250/" ><FontAwesomeIcon icon={faLinkedin} /></a>
       <a href="https://www.instagram.com/_charan_tsk_/"><FontAwesomeIcon icon={faInstagram} /></a>
       <a href="https://www.facebook.com/profile.php?id=100009111732920"><FontAwesomeIcon icon={faFacebook} /></a>
       </div>
    </div>
    <div className="image_container">
        <img src={myImage}/>
    </div>
  </div>
  </>
}

export default About