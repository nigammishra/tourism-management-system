import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const Contact = () => {



  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div>
      
      <button
      className={showButton ? "show" : ""}
      onClick={scrollToTop}
      id="button"
    >
    </button>
      <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Form</title>
  
  <div className="container-fluid coet">
    
    <span className="big-circle" />
    <img src="img/shape.png" className="square" alt />
    <div className="form">
      <div className="contact-info">
        <h3 className="title">Let's get in touch</h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>
        <div className="info">
          <div className="information">
            <i className="fas fa-map-marker-alt" /> &nbsp; &nbsp;
            <p>Odisha (formerly Orissa), an eastern Indian state on the Bay of Bengal.</p>
          </div>
          <div className="information">
            <i className="fas fa-envelope" /> &nbsp; &nbsp;
            <p>TSM@gmail.com</p>
          </div>
          <div className="information">
            <i className="fas fa-phone" />&nbsp;&nbsp;
            <p>91+ 99999 88888</p>
          </div>
        </div>
        <div className="social-media">
          <p>Connect with us :</p>
          <div className="social-icons">
            <Link to="#">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link to="#">
              <i className="fab fa-twitter" />
            </Link>
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
            <Link to="#">
              <i className="fab fa-linkedin-in" />
            </Link>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <span className="circle one1" />
        <span className="circle two2" />
        <form action="index.html" autoComplete="off">
          <h3 className="title">Contact us</h3>
          <div className="input-container">
            <input type="text" name="name" className="input" />
            <label htmlFor>Username</label>
           
          </div>
          <div className="input-container">
            <input type="email" name="email" className="input" />
            <label htmlFor>Email</label>
           
          </div>
          <div className="input-container">
            <input type="tel" name="phone" className="input" />
            <label htmlFor>Phone</label>
            
          </div>
          <div className="input-container textarea">
            <textarea name="message" className="input" defaultValue={""} />
            <label htmlFor>Message</label>
           
          </div>
          <input type="submit" defaultValue="Send" className="custom-btn btn-8" />
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact
