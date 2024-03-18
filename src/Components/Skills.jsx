import React from 'react'
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiMongodb,SiMysql  } from "react-icons/si";
import { PiTreeStructureBold } from "react-icons/pi";
import { faAws, faBootstrap, faCss3Alt, faGithub, faHtml5, faJs, faNodeJs, faPython, faReact, faSquareGit } from "@fortawesome/free-brands-svg-icons";
import { faE } from "@fortawesome/free-solid-svg-icons";
import "../assets/Skills.css"



function Skills() {
  return (
  
    <Element name="skills" className="container-fluid skill-bg">
    <div className="skill-heading">
        <h1>Technical Skills</h1>
      </div>

      <div className="row skill-icons p-4">
        <div className="col-xl-2 col-3 skill-card">
        <FontAwesomeIcon icon={faHtml5} className="skill-icon-html" />
        <h4 className='ms-4 mb-4 topic'>HTML</h4>
        </div>
        <div className="col-xl-2 col-3 skill-card">
        <FontAwesomeIcon icon={faCss3Alt} className="skill-icon-css" />
        <h4 className='ms-4 mb-4 topic'>CSS</h4>
        </div>
        <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faBootstrap} className="skill-icon-bts " />
          <h4 className='ms-1 mb-4 topic'>BOOTSTRAP</h4>
        </div>
        <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faJs} className="skill-icon-js" />
          <h4 className='ms-5 mb-4 topic'>JS</h4>
        </div>
        <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faReact} className="skill-icon-rjs" />
          <h4 className='ms-3 mb-4 topic'>REACT JS</h4>
        </div>
        <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faNodeJs} className="skill-icon-njs" />
          <h4 className='ms-4 mb-4 topic'>NODE JS</h4>
        </div>
        <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faE} className="skill-icon-exp" />
          <h4 className='ms-4 mb-4 topic'>EXPRESS JS</h4>
        </div>
        <div className="col-xl-2 col-3 skill-card">
        <SiMongodb className="skill-icon-mdb" />
        <h4 className='ms-4 mb-4 topic'>MONGO DB</h4>
        </div>
        <div className="col-xl-2 col-3 skill-card">
        <SiMysql className="skill-icon-sql" />
        <h4 className='ms-4 mb-4 topic'>SQL</h4>
        </div>
        <div className="col-xl-2 col-3 skill-card">
        <FontAwesomeIcon icon={faSquareGit} className="skill-icon-git"/>
        <h4 className='ms-4 mb-4 topic'>GIT</h4>
        </div>
        <div className="col-xl-2 col-3 skill-card">
        <FontAwesomeIcon icon={faGithub} className="skill-icon-github"/>
        <h4 className='ms-4 mb-4 topic'>GITHUB</h4>
        </div>
        {/* <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faAws} className="skill-icon-aws" />
        </div>
        <div className="col-xl-2 col-3 skill-card">
        <PiTreeStructureBold  className="skill-icon-dsa"/>
        </div>
        <div className="col-xl-2 col-3 skill-card">
          <FontAwesomeIcon icon={faPython} className="skill-icon-python" />
        </div> */}
      </div>
  </Element>




  )
}

export default Skills







