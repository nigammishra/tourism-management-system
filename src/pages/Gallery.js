import React, { useState, useEffect } from "react";
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
import gallary1 from '../image/Gallrey1.jpg'
import gallary2 from '../image/Gallery2.jpg'
import gallary3 from '../image/Gallery3.jpg'
import gallary4 from '../image/Gallery4.jpg'
import gallary5 from '../image/Gallery5.jpg'
import gallary6 from '../image/Gallery6.jpg'
import gallary7 from '../image/Gallery7.jpg'
import gallary8 from '../image/Gallery8.jpg'
import gallary9 from '../image/Gallery9.webp'
import gallary10 from '../image/Gallery10.jpg'
import gallary11 from '../image/Gallery11.jpg'
import gallary12 from '../image/Gallery12.jpg'
import gallary13 from '../image/Gallery13.jpg'
import gallary14 from '../image/Gallery14.jpg'
import gallary15 from '../image/Gallery15.jpg'
import gallary16 from '../image/Gallery16.jpg'
import gallary17 from '../image/Gallery17.jpg'
import galle from '../image/galle.jpg'
import galle1 from '../image/galle1.jpg'
import galle2 from '../image/galle2.jpg'
import galle3 from '../image/galle3.jpg'
import galle4 from '../image/galle4.jpg'
import galle5 from '../image/galle5.jpg'
import galle6 from '../image/galle6.jpg'
import galle7 from '../image/galle7.jpg'
import galle8 from '../image/galle8.jpg'
import galle9 from '../image/galle9.jpg'
import galle10 from '../image/galle10.jpg'
import galle11 from '../image/galle11.jpg'
import galle12 from '../image/galle12.jpg'
import galle13 from '../image/galle13.jpg'
import logo from '../image/gallerylogo.png';
// image import 
import image from '../image/puritemple.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Gallery = () => {




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
      <>


      <button
      className={showButton ? "show" : ""}
      onClick={scrollToTop}
      id="button"
    >
    </button>
     <div>
      
  <section className="bannerr">
  <div className="banner-content">
      <h2 className='galo'>Gallery
      <p>
        I'm Gio, a talented frontend developer that loves creating immersive
        web experiences.
      </p>
      </h2>
    </div>
    <img style={{height:'300px',width:'500px'}} className='galog' src={logo} />
    <svg className='sv' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 
  58-18 88-18s
  58 18 88 18 
  58-18 88-18 
  58 18 88 18
  v44h-352z" />
    </defs>
    <g className="waves">
      <use xlinkHref="#gentle-wave" x={50} y={0} fill="#03ffff" fillOpacity=".2" />
      <use xlinkHref="#gentle-wave" x={50} y={3} fill="#03ffff" fillOpacity=".5" />
      <use xlinkHref="#gentle-wave" x={50} y={6} fill="#03ffff" fillOpacity=".9" />
    </g>
  </svg>
  </section>
</div>

      </>
      {/* <>
      <section className="banner">
          <img className="banner" src={image} alt />
          <div className="banner-text-item">
            <div className="banner-heading">
              <h1>Explore The Beauty Of Odisha</h1>
            </div>
            </div>
            </section>
      </> */}
        <>
      <div className="section-wrapper p-t80">
          <div className="container">
            <h1 className="head2 text-center">Tourism Photo of Odisha</h1>
            <div className="gallery-container" id="gallery-container">
              <LightGallery
                speed={200}
                plugins={[ lgThumbnail, lgZoom, lgShare, lgRotate, lgVideo, lgAutoplay, ]} >
                
                    <a
                      
                      data-lg-size="1400-1400"
                     className="gallery-item  "
                      data-src={gallary16}
                      data-sub-html="<h4>Deomali</h4>"
                    >
                      <img
                         className="img-fluid"
                        src={gallary16}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary1}
                      data-sub-html="<h4>Konark</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary1}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary2}
                      data-sub-html="<h4>Budha</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary2}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary3}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary3}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary4}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary4}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary5}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary5}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary6}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary6}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary7}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary7}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary8}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary8}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary9}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary9}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary10}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary10}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary11}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary11}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary17}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary17}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary12}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary12}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary13}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary13}
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
                  {/* <h3 data-title="Top Services">Top Services</h3> */}
                  <div className="wt-separator bg-primarys" />
                  <div className="wt-separator2 bg-primarys" />
                  <p className='gall'>MOST POPULAR PHOTO'S OF 2K24</p>
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
                          <img src={galle12} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                           Traditional Dress Of Odisha
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Konark Sun Temple
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle1} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Chilika Lake
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle2} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Patora Dam Nuapada 
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle3} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Maha Prashad
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle4} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                           Puri Sea Beach
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle5} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                           DHAULIGIRI BUDDHIST TEMPLE 
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle6} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Maa Tara Tarini Temple 
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle7} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Tarini Temple
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle8} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Odisha Art
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle9} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            ODISHA
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle10} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            ANTIQUE
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle11} height="251" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            National Geographic
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle13} height="250" width="100%" />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Famolus Food
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