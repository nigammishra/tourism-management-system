import React from "react";
import Odishapng from "../image/OdishaTourism1.png";


const Footer = () => {

  return (
    <div>
      <>
        <footer className="footer-section">
          <div className="container">
            <div className="footer-cta pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-map-marker-alt" />
                    <div className="cta-text">
                      <h4>Find us</h4>
                      <span>salipur,cuttack</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-phone" />
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span>8260821103</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="far fa-envelope-open" />
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span>nigammishra826@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src={Odishapng} className="img-fluid" alt="logo" />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p>
                        Lorem ipsum dolor sit amet, consec tetur adipisicing
                        elit, sed do eiusmod tempor incididuntut consec tetur
                        adipisicing elit,Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="footer-social-icon">
                      <span>Follow us</span>
                      <a href="#">
                        <i className="fab fa-facebook-f facebook-bg" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter twitter-bg" />
                      </a>
                      <a href="#">
                        <i className="fab fa-google-plus-g google-bg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about-us">about</a>
                      </li>
                      <li>
                        <a href="#">services</a>
                      </li>
                      <li>
                        <a href="#">portfolio</a>
                      </li>
                      <li>
                        <a href="/Gallery">Gallery</a>
                      </li>
                      {/* <li><a href="#">About us</a></li> */}
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#">Expert Team</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill
                        the form below.
                      </p>
                    </div>
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button>
                          <i className="fab fa-telegram-plane" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div className="copyright-text">
                    <div className="footer-year mt-5">
                      ©<span id="year">{new Date().getFullYear()}</span>| BBSR,
                      All Rights Reserved.
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;
