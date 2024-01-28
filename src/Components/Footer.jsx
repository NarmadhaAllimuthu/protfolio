
import React from 'react'
import { MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import { Link } from 'react-scroll';
import "../assets/Footer.css"

function Footer() {
    return (

        <>

            <MDBFooter className='text-center text-lg-start text-muted footer-container '>
                {/* <section className='mb-4 footer-icons'>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#3b5998' }}
          href='https://www.facebook.com/profile.php?id=100040037795176'
          role='button'
        >
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#55acee' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#dd4b39' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#ac2bac' }}
          href='https://www.instagram.com/dineshdhiney/'
          role='button'
        >
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#0082ca' }}
          href='https://www.linkedin.com/in/dinesh-tsd-fire-coder/'
          role='button'
        >
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#333333' }}
          href='https://github.com/Dinesh-TSD'
          role='button'
        >
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section> */}

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4  text-muted mt-4 '>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    Narmadha Allimuthu
                                </h6>
                                <p>
                                    Passionate about creating innovative website using the MERN stack.
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-3 mt-5 ml-5 text-center'>

                                <Link to="hero" className="footer-content " >Home</Link>

                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-3 mt-5 text-center'>

                                <Link to="skills" className="footer-content " >Skills</Link>

                            </MDBCol>
                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-3 mt-5 text-center' >

                                <Link to="project" className="footer-content " >projects</Link>



                            </MDBCol>

                            <MDBCol md='3' lg='3' xl='3' className='mx-auto mb-md-0 mb-4  text-muted mt-5'>


                                <p >
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    narmadhaallimuthu006@gmail.com
                                </p>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4 mb-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>

                    By Narmadha Allimuthu
                </div>
            </MDBFooter>

        </>


    )
}

export default Footer













