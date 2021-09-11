import React, { useState } from "react";

const Contact = () => {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });


      const postUserData = (e) => {
        setUserData({ ...userData, [ e.target.name]: e.target.value });
      };


      const submitData = async (e) => {
        e.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData;

        if(firstName && lastName && phone && email && address && message){
        const res = await fetch('https://e-commerce-65530-default-rtdb.firebaseio.com/userDataRecords.json',
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            firstName, 
            lastName, 
            phone, 
            email, 
            address, 
            message,
        }),
        }
        );

        if(res) {
            setUserData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                address: "",
                message: "",
          });
          alert("Data Stored");
        } else {
          alert("Please fill the data");
        }
    }else {
        alert("Please fill the data");
    }
};


    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">

                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">Connect With Our <br /> Sales Team.</h1>
                                    <p className="main-hero-para">We are available for 24/7 and we are happy to resolve your queries.</p>
                                    <figure>
                                    <img src="./images/hero1.jpg" alt="contatUsImg" className="img-fluid"/>
                                    </figure>
                                </div>


                                <div className="contact-rightside col-12 col-lg-7">

                                    <form method="POST">

                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="firstName" id="" className="form-control" placeholder="First Name" value={userData.firstName} onChange={postUserData}/>
                                            </div>

                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="lastName" id="" className="form-control" placeholder="Last Name" value={userData.lastName} onChange={postUserData}/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="phone" id="" className="form-control" placeholder="Phone Number" value={userData.phone} onChange={postUserData}/>
                                            </div>

                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="email" id="" className="form-control" placeholder="Email ID" value={userData.email} onChange={postUserData}/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input type="text" name="address" id="" className="form-control" placeholder="Add Address" value={userData.address} onChange={postUserData}/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 ">
                                                <input type="text" name="message" id="" className="form-control" placeholder="Enter Your Message" value={userData.message} onChange={postUserData}/>
                                            </div>
                                        </div>

                                        <div className="form-check form-checkbox-style">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label  className="form-check-label main-hero-para" >I agree that the YourMart may contact me at the email address or phone number above</label>
                                        </div>

                                        <button type="submit" className="btn btn-outline-primary w-100" onClick={submitData}>Submit</button>

                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
