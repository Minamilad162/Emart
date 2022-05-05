import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1 className='text-primary fw-bold mb-4'>
              About Us
            </h1>
            <p className="lead mb-4">
            Over a decade ago, we started a store to sell snowboards online. None of the ecommerce solutions at the time gave us the control we needed to be successful—so we built our own. Today, businesses of all sizes use Shopify, whether they’re selling online, in retail stores, or on-the-go.
            Collection has grown from 5 people in a coffee shop to over 5,000 across the globe. With millions of businesses powered by Shopify, we care deeply about the work we do. We’re constant learners who thrive on change and seek to have an impact in everything we do.


            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 mb-2 d-flex justify-content-center">
            <img src="/assets/aboutjpg.jpg" alt="" width="500px"  height="500px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
