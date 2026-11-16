import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";

import Tunnel from "./three/Tunnel";



import Home from "./sections/Home";
import About from "./sections/About"
import Skills from "./sections/Skills";
import Project from "./sections/Project"
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import BeyondCode from "./sections/BeyondCode";



function App() {
  return (
    <>

      <Tunnel/>
      <ScrollProgress/>

     <div className="relative z-10">
      
       <Navbar/>
      


    <div className="relative z-10">
      <Home/>
      <About/>
      <BeyondCode/>
      <Skills/>
      <Education/>
      <Project/>
      <Contact/>
      
      </div>
      </div>
    </>


  )
}

export default App;