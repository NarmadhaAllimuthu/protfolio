
import React from 'react'
import "../assets/About.css"
import { Element } from 'react-scroll'

function About() {
  return (
   
    <Element name="about" className="container-fluid about-container">
    <div className="heroContainer">
      <div className="about-heading">
        <h1>About Me</h1>
      </div>

      <div className="row">
      

        <div className="col-lg-7 col-sm-12">
          <div className="about-content">
            <div className="about-section">
              <h4 className='text-center'>Profile</h4>
              <p>
              An accomplished MERN Stack Developer with a passion for creating seamless user experiences. With a solid foundation in MongoDB, Express.js, React, and Node.js, I specialize in crafting visually captivating and intuitively navigable full-stack applications. Leveraging my expertise in responsive design, RESTful APIs.
              I bring concepts to life, ensuring each project is a masterpiece of precision, functionality, and end-to-end development within the MERN stack ecosystem.
              </p>
              {/* <div className="row text-center">
              <div className="col-lg-4">
                <h6>6</h6>
<p>Month Experiances</p>
              </div>
              <div className="col-lg-3">

              </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 hero-bg">
          <img src="https://img.freepik.com/premium-vector/young-cheerful-woman-with-long-hair-casual-style-clothes-pointing-away-isolated-vector_126609-674.jpg" alt="" className="about-pic" />
        </div>
      </div>
    </div>
  </Element>


  )
}

export default About











