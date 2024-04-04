import React from 'react'
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
 
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

// image import 

import image from '../image/puritemple.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Gallery = () => {
  return (
    <div>
      <>
      <section className="banner">
          <img className="banner" src={image} alt />
          <div className="banner-text-item">
            <div className="banner-heading">
              <h1>Explore The Beauty Of Odisha</h1>
            </div>
            </div>
            </section>
      </>
        <>
      <div className="section-wrapper p-t80">
          <div className="container">
            <h1 className="head2 text-center">Tourist Places In Odisha</h1>
            <div className="gallery-container" id="gallery-container">
              <LightGallery
                speed={200}
                plugins={[ lgThumbnail, lgZoom, lgShare, lgRotate, lgVideo, lgAutoplay, ]} >
                
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item  "
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={image}
                      data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={image}
                        alt=""
                      />
                    </a>

              </LightGallery>
            </div>
          </div>
         </div>
      </>
      <>
      <div className='container-fluid'>
              <div
                className="section-full p-t80 p-b80 bg-gray section8"
                id="services"
              >
                {/* <div className="container"> */}
                {/* TITLE START*/}
                <div className="section-head text-center">
                  {/* <div className="section-sub-title">FIND OUT MORE</div> */}
                  <h3 data-title="Top Services">Top Services</h3>
                  <div className="wt-separator bg-primarys" />
                  <div className="wt-separator2 bg-primarys" />
                  <p>We helping client to create with our talented expert.</p>
                </div>
                {/* TITLE END*/}
                <div className="section-content" style={{position:'sticky'}}>
                  <div className="row justify-content-center ">
                    <div classname="swiper-wrapper d-flex align-items-center">
                      <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        loop={true}
                        // centeredSlides={true}
                        slidesPerView={"4"}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        // pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                        autoplay={{
                          // Add autoplay configuration
                          delay: 1000, // Delay in milliseconds
                          disableOnInteraction: false, // Autoplay continues even when the user interacts with it
                        }}
                        speed={1000} // Set the speed in milliseconds
                      >
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              // color: "#00897b",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Agriculture
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Doctor
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Food
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Beauty
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Education
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Wedding
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Telismith
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Health
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            TravelService
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Household
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            BusinessService
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Production
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="251" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Medicine Store
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={image} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Finance Services
                          </h5>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
                </div>
              </div>
    </>
    </div>
  )
}

export default Gallery