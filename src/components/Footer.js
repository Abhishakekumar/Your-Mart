import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="w-100 bg-light text-center">
        <div className="main-footer"> 
        <div className="container">
        <div  className="row">
        {/*column1 */}
        <div className="col">
        <h4>YOUR COMPANY INC</h4>
        <ul className="list-unstyled">
        <li>799-224-0642</li>
        <li>Bihar,India</li>
        <li>ward no-09, Nokha</li>
        </ul>
        </div>
        {/*column2 */}
        <div className="col">
        <h4>All STUFF</h4>
        <ul className="list-unstyled">
        <li>latest post</li>
        <li>Archeive post</li>
        <li>Trending post</li>
        </ul>
        </div>
        {/*column3 */}
        <div className="col">
        <h4>Social Accounts</h4>
        <ul className="list-unstyled">
        <li>
        <a href="https://www.facebook.com/amanrawal2812"><p className="fa fa-facebook"></p></a>
        <a href="https://www.instagram.com/its.amankr/" ><p className="fa fa-instagram"></p></a>
        <a href="https://www.linkedin.com/in/aman-kumar2812/" ><p className="fa fa-linkedin"></p></a>
        </li>
        <li>updated soon...</li>
        </ul>
        </div>
        </div>
        <hr/>
        <div className="row">
        <p className="col-sm">
            &copy;{new Date().getFullYear()} YOUR COMPANY INC | All right reserved | Terms Of Service | Privacy
        </p>
        </div>
        </div>
        </div>
        </footer>
            
               
    )
}
export default Footer;