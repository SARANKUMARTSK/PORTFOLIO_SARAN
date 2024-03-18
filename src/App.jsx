import React,{useState} from 'react'
import TopBar from './components/TopBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  let [darkMode,setDarkMode] = useState(true)
  return <>
  <div id={darkMode?"dark_mode":"light_mode"}>
  <TopBar darkMode={darkMode} setDarkMode={setDarkMode}/>
  <About />
  <Skills/>
  <Projects/>
  <Experience/>
  <Contact/>
  </div>
  </>
}

export default App