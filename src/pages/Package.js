import React, { useState, useEffect, useRef } from "react";
import img from "../image/room1.webp";
import img1 from "../image/room2.webp";
import img2 from "../image/room3.webp";
import img3 from "../image/room4.webp";
import img4 from "../image/room5.jpeg";
import img5 from "../image/room6.jpeg";
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { PulseLoader } from "react-spinners";

const Package = () => {

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
      
      <>
      <button
      className={showButton ? "show" : ""}
      onClick={scrollToTop}
      id="button"
    >
    </button>
        <div>
          {/* jumbotron and nav */}
          <section className="colorful jumbotron mb-0 p-t80" role="banner">
            <div className="container hotels-container">
              <div className="row mt-2 justify-content-between">
                <div className="col-md-8 text-white align-self-center mb-2 p-4">
                 <p className="hote">
                 HOTEL PLACES
                 </p>
                   
                  <span className>
                    
                      <h4 style={{color:'#fff'}}>place description</h4>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Harum debitis perspiciatis sed iusto eveniet neque
                    natus quidem velit optio cumque saepe repudiandae vero, sit
                    hic adipisci laudantium libero blanditiis animi.</p>
                  </span>
                </div>
                <div className="col-md-4">
                  <div className=" form-card">
                    <h3>Find Hotels</h3>
                    <form action="#">
                      <div className="row form-group">
                        <div className="col-md-12">
                          <label htmlFor="destination">Destination</label>
                          <input
                            type="text"
                            name="destination"
                            id="destination"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-12">
                          <label htmlFor="activities">Activities</label>
                          <select
                            name="#"
                            id="activities"
                            className="form-control"
                          >
                            <option value>All</option>
                            <option value>Activities</option>
                            <option value>Hiking</option>
                            <option value>Caving</option>
                            <option value>Swimming</option>
                          </select>
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-12">
                          <input
                            type="submit"
                            className="bttn"
                            defaultValue="Find"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="search-container">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="row my-3">
                    <div className="col-sm-12 map-container-btn text-center">
                    <a href="https://maps.app.goo.gl/9VMSJmCrocHH7LkYA">
                        <button type="button" class="btn btn-outline-primary">MAP</button>
                            </a>
                    </div>
                  </div>
                  <div className="row mt-2 justify-content-between">
                    <div className="filter-card">
                      <h5>Filter</h5>
                      <form action="#">
                        <div className="row form-group">
                          <div className="col-md-12">
                            <label htmlFor="mintopay">Check in</label>
                            <p>
                              <input
                                type="date"
                                name="checkin"
                                id="checkin"
                                className="form-control"
                              />
                            </p>
                          </div>
                          <div className="col-md-12">
                            <label htmlFor="maxtopay">Check out</label>
                            <p>
                              <input
                                type="date"
                                name="checkout"
                                id="checkout"
                                className="form-control"
                              />
                            </p>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                          <div class="slidecontainer">
                          <div>
                            
                          <input type="range" min={1} max={100} defaultValue={50} className="slider" id="myRange" />
                          <p>Value: <span id="demo" /></p>
                          </div>

                            {/* <label htmlFor="date-start">Price Range</label>: cost- */}
                            {/* <span id="price" className="price">
                              1000
                            </span>
                            <input
                              type="range"
                              min={23}
                              max={1000}
                              defaultValue={1000}
                              className="slider"
                              id="myRange"
                            />
                            <p /> */}
                            </div>
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-12">
                            <input
                              type="submit"
                              className="btn btn-primary btn-block"
                              defaultValue="Limit"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div style={{ backgroundColor:"white" }} className="container">
              <section style={{ paddingLeft: "4%" }} className="border">
                <h2 className="filter">Popular Filters</h2>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Swimming pool
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Apartments
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Hotels
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Private bathroom
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Sea view
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Guesthouses
                    </label>
                  </div>
                </div>
              </section>
            </div>
            <div style={{ backgroundColor:"white" }} className="container">
              <section style={{ paddingLeft: "4%" }} className="border">
                <h2 className="filter">Property Type</h2>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Hotels
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Apartments
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Bed and Breakfasts
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Guesthouses
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Homestays
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Motels
                    </label>
                  </div>
                </div>
              </section>
            </div>
            <div style={{ backgroundColor:"white" }} className="container">
              <Form.Select aria-label="Default select example">
                <option>Brands</option>
                <option value="1">FabHotels</option>
                <option value="2">The Indian Hotels Co Ltd</option>
                <option value="3">Sarovar (Louvre)</option>
                <option value="4">Holiday Inn Hotels & Resorts</option>
                <option value="5">Oberoi Hotels & Resorts</option>
                <option value="6">Park Plaza Hotels & Resorts</option>
              </Form.Select>
            </div>
                  </div>
                </div>
                <div className="col-lg-9  px-4">
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div className="form-inline">
                        <label
                          className="m-4"
                          htmlFor="exampleFormControlSelect1"
                        >
                          Sort by
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Recommended</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* <Slide direction="b" */}
                  <div className="row search-card-result">
                    <div className="col-md-3">
                    <div className="inner">
                      <img
                        className="img-fluid"
                        src={img}
                        alt="Card image cap"
                      />
                      </div>
                    </div>
                    <div style={{marginTop:"1%"}} className="col-md-5">
                      <h5>Choose The Best Plan For You</h5>
                      <div className="review">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                      </div>
                      <p>
                        Join over 1 Million of users. Dignissimos asperiores
                        vitae velit veniam
                      </p>
                      <p>
                        <span className="badgee badge-primary">8.8</span>{" "}
                        Excellent (2323 reviews)
                      </p>
                      <p>
                        <i className="fa fa-bath" />
                        <i className="fa fa-phone" />
                        <i className="fa fa-wifi" />
                        <i className="fa fa-tv" />
                      </p>
                    </div>
                    {/* <div className="col-md-2 border-left text-center more-offers">
                      // <p>place.com</p>
                      <p>
                        <s>cost-123</s>
                      </p>
                      // <p>Place.com</p>
                      <p>cost-6500</p>
                      <p className="border-top additional">
                        More Deals from cost-6500
                      </p>
                    </div> */}
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badge badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        {/* <p>place.com</p> */}
                        {/* <h5>₹10,999</h5> */}
                        <p>
                          <s>₹12,299</s>
                        </p>
                      </div>
                      <div className="text-success">
                        {/* <p>Place.com</p> */}
                        <h5>₹10,999</h5>
                      </div>
                      <Link className="roo" to="/Roombook"><div className="bttn btn-success">View deal &gt;</div></Link>
                    </div>
                  </div>
                  <div className="row search-card-result">
                    <div className="col-md-3">
                    <div className="inner">
                      <img
                        className="img-fluid"
                        src={img1}
                        alt="Card image cap"
                      />
                      </div>
                    </div>
                    <div style={{marginTop:"1%"}} className="col-md-5">
                      <h5>Choose The Best Plan For You</h5>
                      <div className="review">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <p>
                        Join over 1 Million of users. Dignissimos asperiores
                        vitae velit veniam
                      </p>
                      <p>
                        <span className="badgee badge-primary">7.6</span>{" "}
                        Excellent (2323 reviews)
                      </p>
                      <p>
                        <i className="fa fa-bath" />
                        <i className="fa fa-phone" />
                        <i className="fa fa-wifi" />
                        <i className="fa fa-tv" />
                      </p>
                    </div>
                    {/* <div className="col-md-2 border-left text-center more-offers">
                      // <p>place.com</p>
                      <p>
                        <s>cost-123</s>
                      </p>
                      // <p>Place.com</p>
                      <p>cost-6500</p>
                      <p className="border-top additional">
                        More Deals from cost-6500
                      </p>
                    </div> */}
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badge badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        {/* <p>place.com</p> */}
                        <p>
                          <s>₹15,000</s>
                        </p>
                      </div>
                      <div className="text-success">
                        {/* <p>Place.com</p> */}
                        <h5>₹7999</h5>
                      </div>
                      <Link className="roo" to="/Roombook"><div className="bttn btn-success">View deal &gt;</div></Link>
                    </div>
                  </div>
                  <div className="row search-card-result">
                    <div className="col-md-3">
                    <div className="inner">
                      <img
                        className="img-fluid"
                        src={img2}
                        alt="Card image cap"
                      />
                      </div>
                    </div>
                    <div style={{marginTop:"1%"}} className="col-md-5">
                      <h5>Choose The Best Plan For You</h5>
                      <div className="review">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <p>
                        Join over 1 Million of users. Dignissimos asperiores
                        vitae velit veniam
                      </p>
                      <p>
                        <span className="badgee badge-primary">6.5</span>{" "}
                        Excellent (2323 reviews)
                      </p>
                      <p>
                        <i className="fa fa-bath" />
                        <i className="fa fa-phone" />
                        <i className="fa fa-wifi" />
                        <i className="fa fa-tv" />
                      </p>
                    </div>
                    {/* <div className="col-md-2 border-left text-center more-offers">
                      // <p>place.com</p>
                      <p>
                        <s>cost-123</s>
                      </p>
                      // <p>Place.com</p>
                      <p>cost-6500</p>
                      <p className="border-top additional">
                        More Deals from cost-6500
                      </p>
                    </div> */}
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badge badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        {/* <p>place.com</p> */}
                        <p>
                          <s>₹11,999</s>
                        </p>
                      </div>
                      <div className="text-success">
                        {/* <p>Place.com</p> */}
                        <h5>₹4599</h5>
                      </div>
                      <Link className="roo" to="/Roombook"><div className="bttn btn-success">View deal &gt;</div></Link>
                    </div>
                  </div>
                  <div className="row search-card-result">
                    <div className="col-md-3">
                    <div className="inner">
                      <img
                        className="img-fluid"
                        src={img3}
                        alt="Card image cap"
                      />
                      </div>
                    </div>
                    <div style={{marginTop:"1%"}} className="col-md-5">
                      <h5>Choose The Best Plan For You</h5>
                      <div className="review">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <p>
                        Join over 1 Million of users. Dignissimos asperiores
                        vitae velit veniam
                      </p>
                      <p>
                        <span className="badgee badge-primary">8.5</span>{" "}
                        Excellent (2323 reviews)
                      </p>
                      <p>
                        <i className="fa fa-bath" />
                        <i className="fa fa-phone" />
                        <i className="fa fa-wifi" />
                        <i className="fa fa-tv" />
                      </p>
                    </div>
                    {/* <div className="col-md-2 border-left text-center more-offers">
                      // <p>place.com</p>
                      <p>
                        <s>cost-123</s>
                      </p>
                      // <p>Place.com</p>
                      <p>cost-6500</p>
                      <p className="border-top additional">
                        More Deals from cost-6500
                      </p>
                    </div> */}
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badgee badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        {/* <p>place.com</p> */}
                        <p>
                          <s>₹8100</s>
                        </p>
                      </div>
                      <div className="text-success">
                        {/* <p>Place.com</p> */}
                        <h5>₹3599</h5>
                      </div>
                      <Link className="roo" to="/Roombook"><div className="bttn btn-success">View deal &gt;</div></Link>
                    </div>
                  </div>
                  <div className="row search-card-result">
                    <div className="col-md-3">
                    <div className="inner">
                      <img
                        className="img-fluid"
                        src={img4}
                        alt="Card image cap"
                      />
                      </div>
                    </div>
                    <div style={{marginTop:"1%"}} className="col-md-5">
                      <h5>Choose The Best Plan For You</h5>
                      <div className="review">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                      </div>
                      <p>
                        Join over 1 Million of users. Dignissimos asperiores
                        vitae velit veniam
                      </p>
                      <p>
                        <span className="badgee badge-primary">9.1</span>{" "}
                        Excellent (2323 reviews)
                      </p>
                      <p>
                        <i className="fa fa-bath" />
                        <i className="fa fa-phone" />
                        <i className="fa fa-wifi" />
                        <i className="fa fa-tv" />
                      </p>
                    </div>
                    {/* <div className="col-md-2 border-left text-center more-offers">
                      // <p>place.com</p>
                      <p>
                        <s>cost-123</s>
                      </p>
                      // <p>Place.com</p>
                      <p>cost-6500</p>
                      <p className="border-top additional">
                        More Deals from cost-6500
                      </p>
                    </div> */}
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badge badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        {/* <p>place.com</p> */}
                        <p>
                          <s>₹14,999</s>
                        </p>
                      </div>
                      <div className="text-success">
                        {/* <p>Place.com</p> */}
                        <h5>₹8999</h5>
                      </div>
                     <Link className="roo" to="/Roombook"> <div className="bttn btn-success">View deal &gt;</div></Link>
                    </div>
                  </div>
                  <div className="row search-card-result">
                    <div className="col-md-3">
                    <div className="inner">
                      <img
                        className="img-fluid"
                        src={img5}
                        alt="Card image cap"
                      />
                      </div>
                    </div>
                    <div style={{marginTop:"1%"}} className="col-md-5">
                      <h5>Choose The Best Plan For You</h5>
                      <div className="review">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                      </div>
                      <p>
                        Join over 1 Million of users. Dignissimos asperiores
                        vitae velit veniam
                      </p>
                      <p>
                        <span className="badgee badge-primary">9.7</span>{" "}
                        Excellent (2323 reviews)
                      </p>
                      <p>
                        <i className="fa fa-bath" />
                        <i className="fa fa-phone" />
                        <i className="fa fa-wifi" />
                        <i className="fa fa-tv" />
                      </p>
                    </div>
                    {/* <div className="col-md-2 border-left text-center more-offers">
                      // <p>place.com</p>
                      <p>
                        <s>cost-123</s>
                      </p>
                      // <p>Place.com</p>
                      <p>cost-6500</p>
                      <p className="border-top additional">
                        More Deals from cost-6500
                      </p>
                    </div> */}
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badge badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        {/* <p>place.com</p> */}
                        <p>
                          <s>₹12,599</s>
                        </p>
                      </div>
                      <div className="text-success">
                        {/* <p>Place.com</p> */}
                        <h5>₹8,999</h5>
                      </div>
                      <div className="bttn btn-success"><Link className="roo" to="/Roombook">View deal &gt;</Link></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
      </>
    )}
    </div>
  );
};

export default Package;
