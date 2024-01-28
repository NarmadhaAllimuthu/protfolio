
import React from 'react'
import { Element } from 'react-scroll'
import "../assets/Project.css"

function Project() {
    return (

        <>
            <Element name="project" className="container-fluid my-5 project-cointainer">
                <div className=" text-center">
                    <div className="h1">
                    <h1> Projects</h1>
                    </div>
                    <p className='text-muted'>Here are some of my recent projects</p>
                </div>

                <div className="row project-bg">
          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/inventory.png' className="card-img-top" alt="project image" />
              <div className="card-body">
                <h5 className="card-title mt-3 mb-4">Inventory Management Tool</h5>
                <p className="card-text"> MERN Stack Project: Using MongoDB, Express.js, React, and Node.js for product management, functionality, and secure data.</p>
              <a href='https://github.com/NarmadhaAllimuthu/inventory-frontend' target='_blank'> 
               <button type="button" class="btn btn-primary github-btn">Github <i class="fa-solid fa-arrow-right"></i></button>
              </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/shop.png' className="card-img-top" alt="project image" />
              <div className="card-body">
                <h5 className="card-title  mt-3 mb-4">Shop Cart</h5>
                <p className="card-text">E-commerce Application: Full responsive and scalability e-commerce site with React and redux including adding products to cart and quantity changes.
                </p>
               <a href="https://github.com/NarmadhaAllimuthu/Day-32-redux-cart-task" target='_blank'>
                 <button type="button" class="btn btn-primary github-btn ml-3 mb-3">Github <i class="fa-solid fa-arrow-right"></i></button>
               </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/library.png' className="card-img-top" alt="project image" />
              <div className="card-body">
                <h5 className="card-title mt-3 mb-4">Library Management System</h5>
                <p className="card-text">Library: 
                An full crud operation and an system for managing book and author details with formik validation in a MERN stack application.</p>
                <a href='https://github.com/NarmadhaAllimuthu/day-31-form-validation-task' target='_blank'>
                <button type="button" class="btn btn-primary github-btn">Github <i class="fa-solid fa-arrow-right"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>


            </Element>
        </>



    )
}

export default Project















