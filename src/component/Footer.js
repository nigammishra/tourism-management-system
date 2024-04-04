import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <>
        <footer className="new_footer_area bg_color m-t80">
          <div className="new_footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget company_widget wow fadeInLeft"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      Get in Touch
                    </h3>
                    <p>
                      Don’t miss any updates of our new templates and
                      extensions.!
                    </p>
                    <form
                      action="#"
                      className="f_subscribe_two mailchimp"
                      method="post"
                      noValidate="true"
                      _lpchecked={1}
                    >
                      <input
                        type="text"
                        name="EMAIL"
                        className="form-control memail"
                        placeholder="Email"
                      />
                      <button className="btn btn_get btn_get_two" type="submit">
                        Subscribe
                      </button>
                      <p
                        className="mchimp-errmessage"
                        style={{ display: "none" }}
                      />
                      <p
                        className="mchimp-sucmessage"
                        style={{ display: "none" }}
                      />
                    </form>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget about-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      Main menu
                    </h3>
                    <ul className="list-unstyled f_list">
                      <li className="textstyle">
                        <Link to="#">Home</Link>
                      </li>
                      <li>
                        <Link to="#"> ViewAll</Link>
                      </li>
                      <li>
                        <Link to="#">Create</Link>
                      </li>
                      <li>
                        <Link to="#">Developer</Link>
                      </li>
                      {/* <li><Link to="#">Projects</Link></li>
              <li><Link to="#">My tasks</Link></li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget about-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.6s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.6s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                    <ul className="list-unstyled f_list">
                      <li>
                        <Link to="#">FAQ</Link>
                      </li>
                      <li>
                        <Link to="#">Term &amp; conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Reporting</Link>
                      </li>
                      <li>
                        <Link to="#">Documentation</Link>
                      </li>
                      <li>
                        <Link to="#">Support Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget social-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.8s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.8s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      Team Solutions
                    </h3>
                    <div className="f_social_icon">
                      <Link to="#" className="fab fa-facebook" />
                      <Link to="#" className="fab fa-twitter" />
                      <Link to="#" className="fab fa-linkedin" />
                      <Link to="#" className="fab fa-pinterest" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bg">
              <div className="footer_bg_one" />
              <div className="footer_bg_two" />
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                  {/* <p className="mb-0 f_400">©  2019 All rights reserved.</p> */}
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
