import React from 'react'

const Contact = () => {
  return (
    <div>
      <>
  <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Form</title>
  <link rel="stylesheet" href="style.css" />
  <div className="container coet">
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
            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>
          <div className="information">
            <i className="fas fa-envelope" /> &nbsp; &nbsp;
            <p>lorem@ipsum.com</p>
          </div>
          <div className="information">
            <i className="fas fa-phone" />&nbsp;&nbsp;
            <p>123-456-789</p>
          </div>
        </div>
        <div className="social-media">
          <p>Connect with us :</p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <span className="circle one" />
        <span className="circle two" />
        <form action="index.html" autoComplete="off">
          <h3 className="title">Contact us</h3>
          <div className="input-container">
            <input type="text" name="name" className="input" />
            <label htmlFor>Username</label>
            <span>Username</span>
          </div>
          <div className="input-container">
            <input type="email" name="email" className="input" />
            <label htmlFor>Email</label>
            <span>Email</span>
          </div>
          <div className="input-container">
            <input type="tel" name="phone" className="input" />
            <label htmlFor>Phone</label>
            <span>Phone</span>
          </div>
          <div className="input-container textarea">
            <textarea name="message" className="input" defaultValue={""} />
            <label htmlFor>Message</label>
            <span>Message</span>
          </div>
          <input type="submit" defaultValue="Send" className="btn" />
        </form>
      </div>
    </div>
  </div>
</div>

      </>
    </div>
  )
}

export default Contact
