
import React from 'react'
import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import { Link } from 'react-scroll';
import "../assets/Footer.css"

function Footer() {
    return (

        <>

            <MDBFooter className='text-center text-lg-start text-muted footer-container '>
        

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4  mt-4 '>
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

                                <Link to="project" className="footer-content " >Projects</Link>



                            </MDBCol>

                            <MDBCol md='3' lg='3' xl='3' className='mx-auto mb-md-0 mb-4   mt-5'>


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













