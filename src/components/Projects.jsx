// import React from 'react'
// import orderManagementIcon from '../assets/my_images/orderManagement.png'
// import quizApp from '../assets/my_images/quizApp.png'
// import shopHome from '../assets/my_images/shopHome.png'
// import weatherApp from '../assets/my_images/weatherApp.png'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import ViewCompactAltIcon from '@mui/icons-material/ViewCompactAlt';

// function Projects() {
//   return <>
//   <div name="projects" className='project_page'>
//     <h1 className='page_heading'>Projects</h1>
//     <div className='project_container'>

//       <div className='project_card'>
//         <img src={orderManagementIcon} alt="" />
//         <div>
//             <p>Order Management App</p>
//             <span>HTML , CSS , JS , React , Node-Js , MongoDB </span>
//         </div>
//         <div className='project_icon'>
//             <GitHubIcon/>
//             <ViewCompactAltIcon/>
//         </div>

//       </div>
//       <div className='project_card'>
//       <img src={quizApp} alt="" />
//         <div>
//             <p>Quiz App</p>
//             <span>HTML , CSS & JS </span>
//         </div>
//         <div className='project_icon'>
//             <GitHubIcon/>
//             <ViewCompactAltIcon/>
//         </div>

//       </div>
//       <div className='project_card'>
//       <img src={weatherApp} alt="" />
//         <div>
//             <p>Weather App</p>
//             <span>HTML , CSS & JS </span>
//         </div>
//         <div className='project_icon'>
//             <GitHubIcon/>
//             <ViewCompactAltIcon/>
//         </div>
//       </div>

//     </div>
//   </div>
//   </>
// }

// export default Projects

import React from "react";
import "./project.css";
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact ,faHtml5 ,faCss3Alt , faNode ,faSquareJs} from "@fortawesome/free-brands-svg-icons";


function Projects() {
  return (
    <>
    <h3 className="skill_title">Projects</h3>
    <div className="project_page_flex">


    <section class="cards">
        <article class="card card--1">
          <div class="card__info-hover"></div>
          <div class="card__img"></div>
          <a href="#" class="card_link">
            <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category"> OrderHub</span>
            <h3 class="card__title">Order Management App</h3>
            <span class="card__by">
             
              <a href="#" class="card__author" title="author">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faSquareJs} />
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNode} />
              <span className="mongoDB">MongoDB</span>
              </a>
              <p></p>
              <span class="card__category"> Preview</span>
              <div>
              <div><a href="https://github.com/SARANKUMARTSK/ORDER_MANAGEMENT_FE.git"><GitHubIcon /></a></div>
              <div> <a href="https://bright-swan-63b24a.netlify.app/landing-page"><OpenInBrowserIcon/></a></div>
              </div>
            </span>
          </div>
        </article>
      </section>


      <section class="cards">
        <article class="card card--2">
          <div class="card__info-hover"></div>
          <div class="card__img"></div>
          <a href="#" class="card_link">
            <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category"> Weather</span>
            <h3 class="card__title">Weather App</h3>
            <span class="card__by">
             
              <a href="#" class="card__author" title="author">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faSquareJs} />

              </a>
              <p></p>
              <span class="card__category"> Preview</span>
              <div>
              <div><GitHubIcon/></div>
              <div><OpenInBrowserIcon/></div>
              </div>
            </span>
          </div>
        </article>
      </section>


      <section class="cards">
        <article class="card card--3">
          <div class="card__info-hover"></div>
          <div class="card__img"></div>
          <a href="#" class="card_link">
            <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category"> Quiz</span>
            <h3 class="card__title">My Quiz App</h3>
            <span class="card__by">
             
              <a href="#" class="card__author" title="author">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faSquareJs} />
              
              </a>
              <p></p>
              <span class="card__category"> Preview</span>
              <div>
              <div><GitHubIcon/></div>
              <div><OpenInBrowserIcon/></div>
              </div>
            </span>
          </div>
        </article>
      </section>

     
    </div>



        
    </>
  );
}

export default Projects;
