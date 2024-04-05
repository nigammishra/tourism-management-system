import React from "react";
import img from "../image/room1.webp";
import img1 from "../image/room1.webp";
import img2 from "../image/room1.webp";
import img3 from "../image/room1.webp";

const Package = () => {
  return (
    <div>
      <>
        <div>
          {/* jumbotron and nav */}
          <section className="colorful jumbotron mb-0" role="banner">
            <div className="container hotels-container">
              <div className="row mt-2 justify-content-between">
                <div className="col-md-8 text-white align-self-center mb-2 p-4">
                 <p className="hote">
                 {"{"}
                    {"{"}HOTEL Place {"}"}
                    {"}"}
                 </p>
                   
                  <span className>
                    {"{"}
                    {"{"}place description{"}"}
                    {"}"} Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Harum debitis perspiciatis sed iusto eveniet neque
                    natus quidem velit optio cumque saepe repudiandae vero, sit
                    hic adipisci laudantium libero blanditiis animi.
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
                            className="btn btn-primary btn-block"
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
                      <input
                        name="map"
                        id
                        className="btn btn-outline-secondary map-btn"
                        type="button"
                        defaultValue="map"
                      />
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
                            <label htmlFor="date-start">Price Range</label>: £
                            <span id="price" className="price">
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
                            <p />
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
                    <div className="col-md-5">
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
                    <div className="col-md-2 border-left text-center more-offers">
                      <p>place.com</p>
                      <p>
                        <s>£123</s>
                      </p>
                      <p>Place.com</p>
                      <p>£65</p>
                      <p className="border-top additional">
                        More Deals from £65
                      </p>
                    </div>
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badge badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        <p>place.com</p>
                        <p>
                          <s>£123</s>
                        </p>
                      </div>
                      <div className="text-success">
                        <p>Place.com</p>
                        <h5>£65</h5>
                      </div>
                      <div className="bttn btn-success"><a className="roo" href="/Roombook">View deal &gt;</a></div>
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
                    <div className="col-md-5">
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
                    <div className="col-md-2 border-left text-center more-offers">
                      <p>place.com</p>
                      <p>
                        <s>£123</s>
                      </p>
                      <p>Place.com</p>
                      <p>£65</p>
                      <p className="border-top additional">
                        More Deals from £65
                      </p>
                    </div>
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badge badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        <p>place.com</p>
                        <p>
                          <s>£123</s>
                        </p>
                      </div>
                      <div className="text-success">
                        <p>Place.com</p>
                        <h5>£65</h5>
                      </div>
                      <div className="bttn btn-success"><a className="roo" href="/Roombook">View deal &gt;</a></div>
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
                    <div className="col-md-5">
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
                    <div className="col-md-2 border-left text-center more-offers">
                      <p>place.com</p>
                      <p>
                        <s>£123</s>
                      </p>
                      <p>Place.com</p>
                      <p>£65</p>
                      <p className="border-top additional">
                        More Deals from £65
                      </p>
                    </div>
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badge badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        <p>place.com</p>
                        <p>
                          <s>£123</s>
                        </p>
                      </div>
                      <div className="text-success">
                        <p>Place.com</p>
                        <h5>£65</h5>
                      </div>
                      <div className="bttn btn-success"><a className="roo" href="/Roombook">View deal &gt;</a></div>
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
                    <div className="col-md-5">
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
                    <div className="col-md-2 border-left text-center more-offers">
                      <p>place.com</p>
                      <p>
                        <s>£123</s>
                      </p>
                      <p>Place.com</p>
                      <p>£65</p>
                      <p className="border-top additional">
                        More Deals from £65
                      </p>
                    </div>
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badgee badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        <p>place.com</p>
                        <p>
                          <s>£123</s>
                        </p>
                      </div>
                      <div className="text-success">
                        <p>Place.com</p>
                        <h5>£65</h5>
                      </div>
                      <div className="bttn btn-success"><a className="roo" href="/Roombook">View deal &gt;</a></div>
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
                    <div className="col-md-5">
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
                    <div className="col-md-2 border-left text-center more-offers">
                      <p>place.com</p>
                      <p>
                        <s>£123</s>
                      </p>
                      <p>Place.com</p>
                      <p>£65</p>
                      <p className="border-top additional">
                        More Deals from £65
                      </p>
                    </div>
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badge badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        <p>place.com</p>
                        <p>
                          <s>£123</s>
                        </p>
                      </div>
                      <div className="text-success">
                        <p>Place.com</p>
                        <h5>£65</h5>
                      </div>
                      <div className="bttn btn-success"><a className="roo" href="/Roombook">View deal &gt;</a></div>
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
                    <div className="col-md-5">
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
                    <div className="col-md-2 border-left text-center more-offers">
                      <p>place.com</p>
                      <p>
                        <s>£123</s>
                      </p>
                      <p>Place.com</p>
                      <p>£65</p>
                      <p className="border-top additional">
                        More Deals from £65
                      </p>
                    </div>
                    <div className="col-md-2 border-left text-center more-offers">
                      <h4>
                        <span className="badge badge-success">Top Deal</span>
                      </h4>
                      <div className="text-warning">
                        <p>place.com</p>
                        <p>
                          <s>£123</s>
                        </p>
                      </div>
                      <div className="text-success">
                        <p>Place.com</p>
                        <h5>£65</h5>
                      </div>
                      <div className="bttn btn-success"><a className="roo" href="/Roombook">View deal &gt;</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
};

export default Package;
