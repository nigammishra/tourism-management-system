import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { PulseLoader } from "react-spinners";
import Swal from 'sweetalert2';

const Contact = () => {
    const initialFormData = {
      Username: "",
      Email: "",
      Phone: "",
      Message: ""
    };
  
    const [formData, setFormData] = useState(initialFormData);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const sendEmail = () => {
      const subject = 'Contact Form Submission';
      let body = '';
      for (const key in formData) {
        body += `${key}: ${formData[key]}\n`;
      }
      const mailtoLink = `mailto:nigammishra826@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem("Message", JSON.stringify(formData));
      Swal.fire({
        title: 'Success!',
        text: 'Your request has been send successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        sendEmail();
      });
    };
  
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


  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000); 
  }, []);


  return (
    <div>
         {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color="#fde02f" />
        </div>
      ) : (<>

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
              <p className="text1">
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

            
        {/* Your contact form HTML */}
        <form onSubmit={handleSubmit}>
          <h3 className="title">Contact us</h3>
          <div className="input-container">
          <label htmlFor="Username">Username</label>
            <input type="text" name="Username" className="input" onChange={handleChange} value={formData.Username} />
         
          </div>
          <div className="input-container">
              <label htmlFor="Email">Email</label>
            <input type="email" name="Email" className="input" onChange={handleChange} value={formData.Email} />
          
          </div>
          <div className="input-container">
             <label htmlFor="Phone">Phone</label>
            <input type="tel" name="Phone" className="input" onChange={handleChange} value={formData.Phone} />
           
          </div>
          <div className="input-container textarea"> 
           <label htmlFor="Message">Message</label>
            <textarea name="Message" className="input" onChange={handleChange} value={formData.Message} defaultValue={""} />
          
          </div>
          <input type="submit" defaultValue="Send" className="btn" />
        </form>
    


            </div>
          </div>
        </div>
      </div>
      </>
    )}
    </div>
  )
}

export default Contact