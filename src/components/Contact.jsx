import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faInstagramSquare , faCreativeCommonsShare} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot ,faEnvelope,faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub , faTeamspeak,faFacebook} from '@fortawesome/free-brands-svg-icons';
import { Element } from 'react-scroll';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import resume from '../assets/resume/myResume.pdf'

function Contact() {
  let date = new Date();
  let year = date.getFullYear();

  function makePhoneCall(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
  }
  // console.log(year);
  return <>
  <Element name="contact" className='footer_page'>
   <div className='footer_about'>
    <div className='orderIcon_footer'><h4 style={{display:"inline"}}><span>S</span>aran <span>K</span>umar</h4></div>
    <div className='footer_adress'>
    <p><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;&nbsp;No.24/1 Masaniamman Temple Street</p>
     <p>Anaimalai (Tk), Coimbatore(Dist) , TamilNadu</p>
     <p>642104. </p>
    </div>
   </div>
   <div className='footer_about3'>
   <h3>CONTACT ME @</h3>
    <h6 onClick={()=>makePhoneCall('8675750594')}><FontAwesomeIcon icon={faTeamspeak} />&nbsp;8675750594</h6>
    <h6><FontAwesomeIcon icon={faEnvelope} />&nbsp;<a style={{textDecoration:"none",color:"inherit"}} href="mailto:sarankumartsk@gmail.com">sarankumartsk@gmail.com</a></h6>
   <div className='footer_flex_icons'>
     <a style={{color:"white"}} href="https://www.linkedin.com/in/saran-kumar-17563a250/"><FontAwesomeIcon icon={faLinkedin} /></a>
    <a style={{color:"white"}} href="https://github.com/SARANKUMARTSK"><FontAwesomeIcon icon={faGithub} /></a>
    <a style={{color:"white"}} href="https://www.instagram.com/_charan_tsk_/"><FontAwesomeIcon icon={faInstagramSquare} /></a>
    <a style={{color:"white"}} href="https://www.facebook.com/profile.php?id=100009111732920"><FontAwesomeIcon icon={faFacebook} /></a>
   </div>
   </div>
   <div className='footer_about2'>
    <h3> Download Resume</h3>
    <a href={resume}><DownloadForOfflineIcon/></a>
    <br />
    {/* <FontAwesomeIcon icon={faDownload} /> */}

   </div>
     
  </Element>
  
  <div className='footer_copyRights'>
    <div className='copy'><FontAwesomeIcon icon={faCopyright} /> {`${year} All Rights Reserved`}</div>
  </div>
  </>
}

export default Contact