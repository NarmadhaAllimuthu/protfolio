
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
          <p className='text'>Here are some of my recent projects</p>
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
                
                <a href='https://starlit-melomakarona-65e6c6.netlify.app/' target='_blank'>
                  <button type='button' className='btn btn-danger  ms-5'>Live Demo
                    <i class="fa-solid fa-arrow-right"></i></button>
                </a>
              </div>
            </div>
          </div>



          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/libraryHomePage.png' className="card-img-top" alt="project image" />
              <div className="card-body">
                <h5 className="card-title mt-3 mb-4">Library Management System</h5>
                <p className="card-text">Library:
                  An full crud operation and an system for managing book and author details with formik validation in a MERN stack application.</p>
                <a href='https://github.com/NarmadhaAllimuthu/day-31-form-validation-task' target='_blank'>
                  <button type="button" class="btn btn-primary github-btn mb-2">Github <i class="fa-solid fa-arrow-right"></i></button>
                </a>
                <a href='https://day-31-form-validation-task.vercel.app/' target='_blank'>
                  <button type='button' className='btn btn-danger  ms-5'>Live Demo
                    <i class="fa-solid fa-arrow-right"></i></button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/shortner.png' className="card-img-top" alt="project image" />
              <div className="card-body">
                <h5 className="card-title mt-1 mb-1">URL Shortner</h5>
                <p className="card-text">Shortner:

                  The URL Shortener Task project is a web application designed to efficiently shorten long URLs into concise, easy-to-share links.Also with authentication and it provides users with a convenient tool for managing and sharing URLs effectively!
                </p>
                <a href='https://github.com/NarmadhaAllimuthu/url-shortner-frontend' target='_blank'>
                  <button type="button" class="btn btn-primary github-btn">Github <i class="fa-solid fa-arrow-right"></i></button>
                </a>
                <a href='https://main--ornate-kelpie-d7bd6c.netlify.app/' target='_blank'>
                  <button type='button' className='btn btn-danger  ms-5'>Live Demo
                    <i class="fa-solid fa-arrow-right"></i></button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/todo.png' className="card-img-top" alt="project image" />
              <div className="card-body">
                <h5 className="card-title mt-3 mb-4">Todo List </h5>
                <p className="card-text">Todo:

                  The Todo List Task project is a full CRUD operation system developed with React , enabling users to efficiently manage their tasks with features including adding, editing, deleting, and marking tasks as completed.
                </p>
                <a href='https://github.com/NarmadhaAllimuthu/Day-25-TodoList-Task' target='_blank'>
                  <button type="button" class="btn btn-primary github-btn">Github <i class="fa-solid fa-arrow-right"></i></button>
                </a>
                <a href='https://day-25-todo-list-task-5t7b.vercel.app/' target='_blank'>
                  <button type='button' className='btn btn-danger  ms-5'>Live Demo
                    <i class="fa-solid fa-arrow-right"></i></button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/shop.png' className="card-img-top" alt="project image" />
              <div className="card-body">
                <h5 className="card-title  mt-3 mb-4">Shop Cart</h5>
                <p className="card-text">E-commerce Application: Full responsive and scalability e-commerce site with React and redux including adding products to cart and quantity changes. Also Razorpay payment gateway used for buying materials . 
                </p>
                <a href="https://github.com/NarmadhaAllimuthu/Day-32-redux-cart-task" target='_blank'>
                  <button type="button" class="btn btn-primary github-btn ml-3 ">Github <i class="fa-solid fa-arrow-right"></i></button>
                </a>
                <a href='https://day-32-redux-cart-task.vercel.app/' target='_blank'>
                  <button type='button' className='btn btn-danger  ms-5'>Live Demo
                    <i class="fa-solid fa-arrow-right"></i></button>
                </a>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-12">
            <div className="card mb-4 project-card">
              <img src='./images/money.png' className="card-img-top" alt="project image" />
              <div className="card-body">
                <h5 className="card-title mt-3 mb-4">Currency Exchange value</h5>
                <p className="card-text">Currency Value:

                  The Currency Exchange Value Task project is a web application designed to provide real-time currency exchange rates and conversions. Utilizing APIs and frontend technologies like HTML ,CSS ,JS and calculate currency values across different currencies.

                </p>
                <a href='https://github.com/NarmadhaAllimuthu/Day-20-Money-API' target='_blank'>
                  <button type="button" class="btn btn-primary github-btn">Github <i class="fa-solid fa-arrow-right"></i></button>
                </a>
                <a href='https://day-20-money-api.vercel.app/' target='_blank'>
                  <button type='button' className='btn btn-danger  ms-5'>Live Demo
                    <i class="fa-solid fa-arrow-right"></i></button>
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















