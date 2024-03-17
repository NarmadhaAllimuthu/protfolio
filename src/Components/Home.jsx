
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Element } from 'react-scroll'
import { MDBBtn, MDBContainer, MDBFooter, MDBIcon  } from 'mdb-react-ui-kit';
import "../assets/Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function Home() {
  return (
    <Element name="hero" className="container-fluid header">
    <div className="row">
   
      <div className="col-xl-6 col-lg-6 right">
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlQV4NlJVZ6uq_cOHke15rsGpTPLQa_xI5d4XcvEeh2RRu7cof" alt="" className="hero-pic" />
      </div>
      <div className="col-xl-6 col-lg-6 left">
        <h4>Hi I am</h4>
        <h1>Narmadha Allimuthu</h1>

        <div className="hero-name">
          <span className="primary-text">
            <h2 className="role">
              I am a {" "}
              <span className="role-span">
                <Typewriter
                  words={[
                    "MERN Stack Developer",
                    
                    "Full Stack Developer",
                    "Enthusiastic Developer",
                  ]}
                  loop={4}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </span>
        </div>

        <div className="cv_buttons">
         
          <div className="col-xl-6 col-lg-6 ">
            <a href="./images/Resume.pdf" download className="btn hire-btn">
              Download Resume <i class="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
        <MDBFooter className=" text-center text-white">
          <MDBContainer className="p-4 pb-0">
            <section className="mb-4">
          

          

              <MDBBtn
                floating
                className="m-1 contact-link"
                style={{ backgroundColor: "#0082ca" }}
                href="https://www.linkedin.com/in/narmadha-allimuthu-an/"
                target='_blank'
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>

              <MDBBtn
                floating
                className="m-1 contact-link"
                style={{ backgroundColor: "#333333" }}
                href="https://github.com/NarmadhaAllimuthu"
                target='_blank'
                role="button"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
              <MDBBtn
                floating
                className="m-1 contact-link"
                style={{ backgroundColor: "#0082ca" }}
                href="mailto:narmadhaallimuthu006@gmail.com"
                target='_blank'
                role="button"
              >
                 <i class="fa-solid fa-envelope"></i>
                {/* <MDBIcon fab icon="envelope" /> */}
              </MDBBtn>
            </section>
          </MDBContainer>
        </MDBFooter>
      </div>
    </div>
  </Element>
  )
}

export default Home






