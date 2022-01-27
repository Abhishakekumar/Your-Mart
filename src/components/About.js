import React from 'react'
import {NavLink} from 'react-router-dom';

const About = () => {
    return (
        <>
        <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
				</div>
				<div className="content">
					<h3>Introducing You a perfect and easy way to shop.</h3>
					<p>We provide you best products which gives you a comfort. 
                       Your-Mart is one stop solution for all the different types of product. 
                       Here You will always get a good product at a lowest price.</p>
					<div className="button">
						<NavLink to="/contact">Read More</NavLink>
					</div>
				</div>
				<div className="social">
                    <a href="https://www.facebook.com/"><p className="fa fa-facebook"></p></a>
                    <a href="https://www.instagram.com/" ><p className="fa fa-instagram"></p></a>
                    <a href="https://www.linkedin.com/" ><p className="fa fa-linkedin"></p></a>
				</div>
			</div>
			<div className="image-section">
				<img src="./images/abou.jpg" alt="about-img"/>
			</div>
		</div>
	</div>
        </>
    )
}

export default About;
