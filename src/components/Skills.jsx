import React from 'react'
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs,faCss3Alt,faHtml5,faReact,faNode,faGithub,faBootstrap} from '@fortawesome/free-brands-svg-icons'

function Skills() {
    return <>
            <Element name='skills' className='skill_container'>
           <h1 className='skill_title'>My Skills</h1>
                <div className='skill_details_container'>
                    <div className='skill_details html'>
                    <FontAwesomeIcon className='html_icon' icon={faHtml5} />
                        <h2>HTML 5</h2>
        
                        
                    </div>
                    <div className='skill_details css'>
                    <FontAwesomeIcon className='css_icon' icon={faCss3Alt} />    
                                    <h2>CSS 3</h2>
                        
                    </div>
                    <div className='skill_details js'>
                        <FontAwesomeIcon className='js_icon' icon={faJs} />
                        <h2>JavaScript</h2>
                        
                    </div>
                    <div className='skill_details react'>
                    <FontAwesomeIcon className='react_icon' icon={faReact} />
                        <h2>REACT</h2>
                        
                    </div>
                    <div className='skill_details sql'>
                    {/* <FontAwesomeIcon className='sql_icon' icon={} /> */}
                    <img className='img_mongodb' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWkLkjk9xABLP_nxrCee_wTkTGUGOsme5GA&usqp=CAU" alt="" />
                        <h2>MY SQL</h2>
                        
                    </div>
                    <div className='skill_details mongodb'>
                        <img className='img_mongodb' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVyyChhzZ1BrGc1NzwdqgD9QLRmThesIcyA&usqp=CAU" alt="" />
                        <h2 >Mongo DB</h2>
                    </div>
                    <div className='skill_details nodejs'>
                    <FontAwesomeIcon className='node_icon' icon={faNode} />
                        <h2>NODE JS</h2>
                    
                    </div>
                    {/* <div className='skill_details expressjs'>
                        <h1 style={{color:'black' , textShadow:"none"}}>Express <span style={{color:"yellow"}}><FontAwesomeIcon className='express_icon' icon={faJs} /></span>  </h1>
                        <h3>Express JS</h3>
                    </div> */}
                    <div className='skill_details github'>
                      <FontAwesomeIcon className='git_hub' icon={faGithub} />
                        <h2>Git Hub</h2>
                    </div>
                    <div className='skill_details github'>
                      <FontAwesomeIcon className='bootstrap_icon' icon={faBootstrap}  />
                        <h2>BootStrap</h2>
                    </div>
                </div>
            </Element>

    </>
}

export default Skills