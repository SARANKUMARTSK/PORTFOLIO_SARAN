import React from 'react'
import orderManagementIcon from '../assets/my_images/orderManagement.png'
import quizApp from '../assets/my_images/quizApp.png'
import shopHome from '../assets/my_images/shopHome.png'
import weatherApp from '../assets/my_images/weatherApp.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewCompactAltIcon from '@mui/icons-material/ViewCompactAlt';

function Projects() {
  return <>
  <div name="projects" className='project_page'>
    <h1 className='page_heading'>My Projects</h1>
    <div className='project_container'>

      <div className='project_card'>
        <img src={orderManagementIcon} alt="" />
        <div>
            <p>Order Management App</p>
            <span>HTML , CSS , JS , React , Node-Js , MongoDB </span>
        </div>
        <div className='project_icon'>
            <GitHubIcon/>
            <ViewCompactAltIcon/>
        </div>
        

      </div>
      <div className='project_card'>
      <img src={quizApp} alt="" />
        <div>
            <p>Quiz App</p>
            <span>HTML , CSS & JS </span>
        </div>
        <div className='project_icon'>
            <GitHubIcon/>
            <ViewCompactAltIcon/>
        </div>

      </div>
      <div className='project_card'>
      <img src={weatherApp} alt="" />
        <div>
            <p>Weather App</p>
            <span>HTML , CSS & JS </span>
        </div>
        <div className='project_icon'>
            <GitHubIcon/>
            <ViewCompactAltIcon/>
        </div>
      </div>
      

    </div>
  </div>
  </>
}

export default Projects