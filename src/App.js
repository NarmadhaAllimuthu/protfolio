import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import { Router } from "react-router-dom";


function App() {

  
  return (
    <>
    {/* <Router> */}
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    {/* </Router> */}
    </>
  );
}

export default App;
