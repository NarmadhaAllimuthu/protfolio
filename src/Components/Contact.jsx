
import React from 'react'
import { Element } from 'react-scroll'
import "../assets/Contact.css"

function Contact() {
  return (
    <Element name="contact" className="container-fluid contact-container">
      <div className="exp-heading">
        <h1 className='text-center h1'>Contact </h1>
        <p className='text-center text'>Let's get in touch</p>
      </div>

      <div className="row ">

        <div className="col-md-6 col-11 left ">

          <img 
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FmjuqIq67fItTL55pL0_HTs2cWhQtD29rfuQ9QjxbDzwckv6esxRVQ1Jud_Wj989zw4&usqp=CAU"
           
          src='https://cdn-icons-png.flaticon.com/256/8662/8662591.png'
           alt="" className="about-pic" />
        </div>
        <div className="col-md-5  text-right mt-3 p-4">

          <p className='text-para'>
            I am always open to discussing new projects, creative ideas, and opportunities to collaborate. Whether you have a question or just want to say hi, I'd love to hear from you.
          </p>
          {/* <p>
            Please feel free to contact me using the information below or through any of the social media platforms below.
            </p> */}
          <div class="row mt-5 text-center d-flex justify-content-center">
            <div class="col-lg-4">
              <div 
              // class="text-right"
              >
                <a href="mailto:narmadhaallimuthu006@gmail.com"
                 className='contact-linkName'
                 >
                  <span className='contact-link'> <i class="fa-solid fa-envelope"></i> Email </span>
                  narmadhaallimuthu006@gmail.com</a>

              </div>
            </div>
            </div>
            <div class="row mt-5 text-center d-flex justify-content-center">
            <div class="col-lg-4 ">
              <div  
              //  class="text-right"
               >
              
                <a href="https://www.linkedin.com/in/narmadha-allimuthu-an/" target='_blank'   className='contact-linkName'>
                <span className="contact-link"> <i class="fa-brands fa-linkedin"></i> LinkedIn </span>
                  @narmadhaallimuthu</a>
            
              </div>
            </div>
        </div>


        </div>
      </div>
    </Element>
  )
}

export default Contact










