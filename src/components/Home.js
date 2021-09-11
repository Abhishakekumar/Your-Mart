import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "./images/shopimg1.jpg";
import "./Home.css"

const Home = () => {
    return (
        <div>
            <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex  justify-content-center  flex-column">

                <h1>
                  Choose Your Product From <br/> <strong className="brand-name">Your-Mart</strong>
                </h1>

                <h2 className="my-3">
                We Provide You the best Quality Products for Your Comfort.
                </h2>

                <div className="mt-3">
                <NavLink to="/shop" className="btn btn-outline-primary">
                 Shop Now
                </NavLink>
                </div>
                </div>


              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated border" alt="home img"/>
              </div>
              </div>
            </div>
            </div>
            </div>
        </section>
        </div>
    )
}

export default Home
