import React from "react";
import Footer from "../assets/images/Newsletter.svg";
import "../assets/css/Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <img className="Footerimg" src={Footer} alt="newsletter" />
        <div className="text-on-image">
          <div className="newsletter-title">Sign up for our newsletter </div>
          <div className="newsletter-text">
            Get latest articles, tips etc related to mental health on your email
            every week because we want to be there for you and celeberate your
            little victories.
          </div>

          <input type="email" id="myEmail" placeholder="Your Email" />
          <button className="submitBtn">
            Submit
          </button>
        </div>
      </div>

      <div className="Footer">
        <div className="leftbox">
          <h5>Helpline</h5>
          <br />
          <h6>Suicide and crisis helpline</h6>
          <h6>123456789</h6>
        </div>

        <div className="middlebox">
          <h5>Quick Links</h5>
          <br />
          <h6>About us</h6>
          <h6>FAQ</h6>
          <h6>Contact us</h6>
        </div>

        <div className="rightbox">
          <h5>Help & Support</h5>
          <br />
          <h6>Write to us</h6>
          <h6>Terms and conditions</h6>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
