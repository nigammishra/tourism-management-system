import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import odishatour from "../image/Odisha-tour.jpg";
import odishatour1 from "../image/banner1.jpg";
import odishatour2 from "../image/banner2.jpeg";
import odishatour3 from "../image/banner3.jpeg";
import odishatour4 from "../image/banner4.jpeg";
import odishatour5 from "../image/banner5.jpeg";
import guideimage from "../image/guide.png";
import trust from "../image/NicePng_travel-logo-png_3200042.png";
import travel from "../image/Travel-PNG-Image-HD.png";
import travelhappy from "../image/clipart4216475.png";
import Odishapng from "../image/OdishaTourism1.png";
import Odishatourism from "../image/OdishaTourism.jpg";
// import Odishatourism2 from "../image/glimpses-of-odisha.jpg";
import puri from "../image/puritemple.jpg";
import ANUGUL from "../image/ANUGUL.jpg";
import Balasore from "../image/Balasore.jpg";
import Boudh from "../image/Boudh.jpg";
import Balangir from "../image/Balangir.jpg";
// import sambalpur from "../image/Daringbadi.jpg";
// import Chandipur from "../image/Chandipur.jpg";
import konark from "../image/konark.jpg";
// import bbsr from "../image/bhubaneswar-visit-place.jpg";
import { Link } from 'react-router-dom';
import { Fade, Slide, Bounce, Zoom } from "react-awesome-reveal";
import location from '../image/location.gif';
import review from '../image/Review.gif';
import owner from '../image/owner.gif';
// import doodleimage from '../image/doodles.png';
import lingaraj from '../image/lingaraj1.jpg';
import udaya1 from '../image/udaya1.jpg';
import { PulseLoader } from 'react-spinners';


const Home = () => {

  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000);
  }, []);





  // card  convert to background image
  const activate = (e) => {
    const sliderss = document.querySelector(".sliderss");
    const item1s = document.querySelectorAll(".item1");
    if (e.target.matches(".next")) sliderss.append(item1s[0]);
    if (e.target.matches(".prev")) sliderss.prepend(item1s[item1s.length - 1]);
  };


  // 


  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };





  // card slider

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
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






  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color="#fde02f" />
        </div>
      ) : (
        <>

          <>
            <button
              className={showButton ? "show" : ""}
              onClick={scrollToTop}
              id="button"
            >
            </button>
            {/* <section className="banner">
          <div className="banner-text-item">
            <div className="banner-heading">
              <h1>Explore The Beauty Of Odisha</h1>
            </div>
            <form className="form">
              <input
                type="text"
                list="mylist"
                placeholder="Where would you like to go?"
              />
              <datalist id="mylist">
                <option>London</option>
                <option>Canada</option>
                <option>Monaco</option>
                <option>France</option>
                <option>Japan</option>
                <option>Switzerland</option>
                <option>Seoul</option>
              </datalist>
              <input type="date" className="date" />
              <Link to="#" className="book">
                book
              </Link>
            </form>
          </div>
        </section> */}

            <div>
              <section id='carousel1'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={3000}>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={odishatour1} className="d-block w-100" style={{ height: '85vh', opacity: '999' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Odisha</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={odishatour2} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Odisha</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={Odishatourism} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Odisha</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={odishatour3} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Odisha</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={odishatour4} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Odisha</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img src={odishatour5} className="d-block w-100" style={{ height: '85vh' }} alt="First slide" />
                      <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction='down'>
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of Odisha</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction='up'>
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
              </section>
            </div>

            <section id='carousel2' style={{ paddingTop: '40px' }}>
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={3000}>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={odishatour1} className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Odisha</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src={odishatour2} className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Odisha</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src={Odishatourism} className="d-block w-100" style={{ height: '28vh' }} alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Odisha</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src={odishatour3} className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Odisha</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src={odishatour4} className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Odisha</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src={odishatour5} className="d-block w-100" alt="First slide" />
                    <div className="nivo-caption" style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction='down'>
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of Odisha</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction='up'>
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </section>
          </>

          <>
            <div className="section-head text-center p-t80" >
              <h3 className='h3style' data-title="Travel With Us">Travel With Us</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container responiveheading" style={{ backgroundColor: '#fff' }}>
              <h3 class="head3 spacing secondary-color text-center text-uppercase p-t80"  >
                Travel With Us
              </h3>
              {/* <h2 class=" head2 spacing secondary-color text-center text-uppercase" style={{top:'150px', position:'relative' }} >
            Visit The Best Places Ever
          </h2> */}
            </div>
            <section className="py-4 services" style={{ backgroundColor: '#fff' }}>
              <div className="container">
                {/* <h1>Tourism</h1> */}
                <div className="">
                  <Slider {...settings1}>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={guideimage} />
                        {/* <h2>8000+ Our Local Guides</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={trust} style={{ width: "120px" }} />
                        {/* <h2>100% Trusted Tour Agency</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={travel} style={{ width: "140px" }} />
                        {/* <h2>28+ Years of Travel Experience</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={travelhappy} />
                        {/* <h2>98% Our Travelers are Happy</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={Odishapng} />
                        {/* <h2>98% Our Travelers are Happy</h2> */}
                      </div>
                    </div>
                    {/* <div className="m-1">
                  <div className="partner-list">
                    <img
                      src={homePage?.imagepath + items.image}
                      className="img-fluid"
                    />
                  </div>
                </div> */}
                  </Slider>


                </div>
              </div>
            </section>

          </>

          {/* card section */}

          <>
            <div className="section-head text-center p-t80">
              <h3 className='h3style' data-title=" Tourist Places">Top 8 City</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container-fluid responiveheading">
              <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Top 8 City
              </h3>
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Tourist Places
              </h2>
            </div>

            <main className="page-contents">
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">sambalpur</h2>
                  <p className="copy">

                  </p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">bhubaneswar</h2>
                  <p className="copy">
                    Admire the Rich Architecture
                  </p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">chandipur</h2>
                  <p className="copy">
                    Seaside Serenity
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">puri-seabeach</h2>
                  <p className="copy">
                    Unique Temples and Sun-kissed Beaches
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">puri-temple</h2>
                  <p className="copy">
                    Witness the Popular Rath Yatra
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">Simlipal National Park</h2>
                  <p className="copy">
                    For A Glance At The Famous Bengal Tiger
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title"> Rourkela</h2>
                  <p className="copy">
                    The Largest City In Odisha
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title"> Gopalpur</h2>
                  <p className="copy">
                    Home To The Olive Ridley Sea Turtles
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
            </main>
          </>
          <>
            <section className="team-section1 bg-grey bd-bottom circle5 p-t80 shape padding">
              <div className="container">
                <Slide direction='down'>
                  <div className="section-heading text-center mb-40">
                    <h2>Meet Our Volunteers</h2>
                    <span className="heading-border" />
                    <p>Help today because tomorrow you may be the one who <br /> needs more helping!</p>
                  </div>
                </Slide>
                <div className="team-wrapper row">
                  <div className="col-lg-6 sm-padding">
                    <Slide direction='left'>
                      <div className="team-wrap row">
                        <div className="col-md-6">

                          <div className="team-details">
                            <img className='sideimg1' src={ANUGUL} alt="team" />
                            <div className="hover">
                              <h3>Jonathan Smith <span>Communicator</span></h3>
                            </div>
                          </div>

                        </div>
                        <div className="col-md-6">

                          <div className="team-details">
                            <img className='sideimg2' src={Balasore} alt="team" />
                            <div className="hover">
                              <h3>Angelina Rose <span>Certified Reader</span></h3>
                            </div>
                          </div>

                        </div>
                        <div className="col-md-6" >

                          <div className="team-details">
                            <img className='sideimg3' src={Boudh} alt="team" />
                            <div className="hover">
                              <h3>Taylor Swift <span>Event Creator</span></h3>
                            </div>
                          </div>

                        </div>
                        <div className="col-md-6">

                          <div className="team-details">
                            <img className='sideimg4' src={Balangir} alt="team" />
                            <div className="hover">
                              <h3>Michel Brown <span>Internet Specialist</span></h3>
                            </div>
                          </div>

                        </div>
                      </div>
                    </Slide>
                  </div>
                  <div className="col-lg-6 sm-padding">
                    <Slide direction='right'>
                      <div className="team-content">
                        <h2>Become a Volunteer?</h2>
                        <h3 className='section5h3'>Join your hand with us for a better life and beautiful future.</h3>
                        <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can
                          make in the lives of the poor, the abused and the helpless.</p>
                        <ul className="check-list">
                          <li><i className="fa fa-check" />We are friendly to each other.</li>
                          <li><i className="fa fa-check" />If you join with us,We will give you free training.</li>
                          <li><i className="fa fa-check" />Its an opportunity to help poor children.</li>
                          <li><i className="fa fa-check" />No goal requirements.</li>
                          <li><i className="fa fa-check" />Joining is tottaly free. We dont need any money from you.
                          </li>
                        </ul>
                        <Link to="#" className="custom-btn btn-9 default-btn">Join With Us</Link>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </section>

          </>
          <>
            <div className="section-head text-center p-t80" style={{ paddingBottom: '30px' }}>
              <h3 className='h3style' data-title=" Most Demanded Places">Have A Glance</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container p-t80 responiveheading">
              <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Most Demanded Places
              </h3>
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Have A Glance
              </h2>
            </div>
            <div className="container first-section">
              <main className="section1">
                <ul className="sliderss">
                  <li className="item1 firstimg">
                    <div className="content1">
                      <h2 className="title"> Daringbadi: Kashmir of Odisha</h2>
                      <p className="description">
                        {" "}
                        The hill stations of Phulbani are an attractive place for people who love pine forests and waterfalls.
                        This is one of the places to visit in Odisha during summer.
                        {" "}
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  {/* Repeat the rest of the list items similarly */}
                  <li className="item1 fourthimg">
                    <div className="content1">
                      <h2 className="title"> Chandipur: Seaside Serenity</h2>
                      <p className="description">
                        {" "}
                        <p> There is no beach like Chandipur. At low tide, the beach retreats up to 5 km, allowing people to stroll on the ocean floor. The beach's equally unusual biodiversity is supported by this unique phenomena.</p>
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 thirdimg">
                    <div className="content1">
                      <h2 className="title"> Konark</h2>
                      <p className="description">
                        {" "}
                        The Sun Temple in Konark is one of India's most exquisite temples and an architectural wonder.
                        This is the best place to visit in Odisha! The Annual Dance Festival is a five-day cultural spectacle that brings together exceptional dance talent from throughout the nation.
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 secondimg">
                    <div className="content1">
                      <h2 className="title">Udayagiri and Kandagiri Caves</h2>
                      <p className="description">
                        These are the locations where religion, art, and rock-cut building abound. A pleasant location to take your family is the two hills, which rise sharply from the coastal plain and are divided by a highway around six kilometers west of Bhubaneswar.
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 fivthimg">
                    <div className="content1">
                      <h2 className="title"> Barbil: Mining Town with Rustic Charm</h2>
                      <p className="description">
                        Barbil, located in the Odisha district of Kendujhar/Keonjhar, is a well-liked tourist site and a spot for honeymoon in Odisha.
                        It is located along the Karo River's bank.

                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 sixthimg">
                    <div className="content1">
                      <h2 className="title">Shri Jagannatha Temple</h2>
                      <p className="description">
                        {" "}
                        The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu–one of the trinity of supreme divinity in Hinduism
                        The temple is famous for its annual Ratha Yatra, or chariot festival
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                </ul>
                <nav className="navstyle">
                  <button className="custom-btn1 prev" onClick={activate}>
                    &#8249;
                  </button>
                  <button className="custom-btn1 next" onClick={activate}>
                    &#8250;
                  </button>
                </nav>
              </main>
            </div>
          </>

          <>


            {/* <section id="slideshow" >
                <div class="entire-content">
                    <div class="content-carrousel">
                        <figure class="shadow">
                          <img src={Balasore} /></figure>
                        <figure class="shadow">
                          <img src={Chandipur} /></figure>
                        <figure class="shadow">
                          <img src={Boudh} /></figure>
                        <figure class="shadow">
                          <img src={sambalpur} /></figure>
                        <figure class="shadow">
                          <img src={puri} />
                          </figure>
                        <figure class="shadow">
                          <img src={Balangir} /></figure>
                        <figure class="shadow">
                          <img src={ANUGUL} /></figure>
                        <figure class="shadow">
                          <img src={konark} /></figure>
                        <figure class="shadow">
                          <img src={bbsr} /></figure>
                    </div>
                </div>
                
            </section> */}

            <div className="section-head text-center p-t80 " style={{ paddingBottom: '30px' }} >
              <h3 className='h3style' data-title=" Our Customer in Odisha"> Our Customer in Odisha</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>

            <div className="container p-t80 responiveheading" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
              {/* <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Art& Architectures of
              </h3> */}
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Our Customer in Odisha
              </h2>
            </div>
            <div className="container gap-5 " style={{ display: 'flex', position: 'absolute', zIndex: '5', height: '78vh', alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="section-content doodle">
                <div className="newsletter-section text-center text-white">
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', width: '95vw', flexWrap: 'wrap' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '25%' }}>
                      <Slide direction='left'>
                        <div className="counter-box">
                          <img src={location} className="img-fluid" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} />
                          <div className="counting counter text-black fs-1 fw-bold  " data-count={180}>180</div>
                          <p className='text-black fs-5'>Locations</p>
                        </div>
                      </Slide>
                    </div>
                    <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '25%' }}>
                      <Slide direction='down'>
                        <div className="counter-box">
                          <img src={review} className="img-fluid" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} />
                          <div className="counting counter text-black fs-1 fw-bold" data-count={1400}>14000</div>
                          <h5 className='text-black'>Reviews</h5>
                        </div>
                      </Slide>
                    </div>

                    <div style={{ backgroundColor: 'white', borderRadius: '20px', width: '25%' }}>
                      <Slide direction='right'>
                        <div className="counter-box">
                          <img src={owner} className="img-fluid" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} />
                          <div className="counting counter text-black fs-1 fw-bold" data-count={40000}>40,000</div>
                          <h5 className='text-black'>Visiters</h5>
                        </div>
                      </Slide>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="doodle">
              <css-doodle style={{ position: 'absolute', display: 'flex', alignItems: 'center', }} >
                <style dangerouslySetInnerHTML={{ __html: "\n  --color: #51eaea, #fffde1, #ff9d76, #FB3569;\n\n  @grid: 30x1 / 100% 78vh / #270f34; \n  \n  :container {\n    perspective: 30vmin;\n    --deg: @p(-180deg, 180deg);\n  }\n  \n  :after, :before {\n    content: '';\n    background: @p(--color); \n    @place: @r(100%) @r(100%);\n    @size: @r(6px);\n    @shape: heart;\n  }\n\n  @place: center;\n  @size: 18vmin; \n\n  box-shadow: @m2(0 0 50px @p(--color));\n  background: @m100(\n    radial-gradient(@p(--color) 50%, transparent 0) \n    @r(-20%, 120%) @r(-20%, 100%) / 1px 1px\n    no-repeat\n  );\n\n  will-change: transform, opacity;\n  animation: scale-up 26s linear infinite;\n  animation-delay: calc(-12s / @I * @i);\n\n  @keyframes scale-up {\n    0%, 95.01%, 100% {\n      transform: translateZ(0) rotate(0);\n      opacity: 0;\n    }\n    10% { \n      opacity: 1; \n    }\n    95% {\n      transform: \n        translateZ(35vmin) rotateZ(var(--deg));\n    }\n  }\n" }} />
              </css-doodle>
            </div>

            <div className='doodleimage'>

              {/* <div class="row" >
                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


          
                  <div className="card  counter-box1">
                    <Slide direction='left'>
                      <img src={location} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold  " data-count={180}>180</div>
                        <p className='text-black fs-5'>Locations</p>
                      </div>
                    </Slide>
                  </div>


                </div>
                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


                  <div className="card  counter-box1">
                    <Slide direction='down'>
                      <img src={review} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold" data-count={1400}>14000</div>
                        <h5 className='text-black'>Reviews</h5>
                      </div>
                    </Slide>
                  </div>


                </div>

                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


                 
                  <div className="card  counter-box1">
                    <Slide direction='right'>
                      <img src={owner} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold" data-count={40000}>40,000</div>
                        <h5 className='text-black'>Visiters</h5>
                      </div>
                    </Slide>
                  </div>


                </div>
              </div> */}

              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-90 " style={{ margin: '20px', borderRadius: '15px' }}>
                    <Slide direction='left'>
                      <img src={location} className="card-img-top" style={{ height: '150px', width: '150px', position: 'relative', left: '30%' }} alt="..." />
                    </Slide>
                    <div className="card-body">
                      <Slide direction='right'>
                        <div className="counting counter text-black fs-1 fw-bold  text-center " data-count={180}>180</div>
                        <p className='text-black fs-5  text-center'>Locations</p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 " style={{ margin: '20px', borderRadius: '15px' }}>
                    <Slide direction='right'>
                      <img src={review} className="card-img-top" style={{ height: '150px', width: '150px', position: 'relative', left: '30%' }} alt="..." />
                    </Slide>
                    <div className="card-body">
                      <Slide direction='left'>
                        <div className="counting counter text-black  text-center fs-1 fw-bold" data-count={1400}>14000</div>
                        <h5 className='text-black  text-center'>Reviews</h5>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90" style={{ margin: '20px', borderRadius: '15px' }}>
                    <Slide direction='left'>
                      <img src={owner} className="card-img-top" style={{ height: '150px', width: '150px', position: 'relative', left: '30%' }} alt="..." />
                    </Slide>
                    <div className="card-body">
                      <Slide direction='right'>
                        <div className="counting counter text-black  text-center fs-1 fw-bold" data-count={40000}>40,000</div>
                        <h5 className='text-black text-center'>Visiters</h5>
                      </Slide>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </>
          <>
            <div className="section-head text-center  paddingchange">
              <h1 className='h3style' data-title="Most Loveble Places In Odisha">Most Loveble Places In Odisha</h1>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>

            <div className="container responiveheading  paddingchange" >
              <h2 class=" head2 spacing secondary-color text-center text-uppercase " style={{ paddingTop: "50px" }}>
                Most Loveble Places In Odisha
              </h2>
            </div>
            <div className='container'>
              <ul className="tabitem" id='tabitm'>
                <li className={activeTab === 0 ? 'actives' : ''} onClick={() => handleTabClick(0)} data-id="0">PURI</li>
                <li className={activeTab === 1 ? 'actives' : ''} onClick={() => handleTabClick(1)} data-id="1">Lingaraja Temple </li>
                <li className={activeTab === 2 ? 'actives' : ''} onClick={() => handleTabClick(2)} data-id="2">Udayagiri Caves</li>
                <li className={activeTab === 3 ? 'actives' : ''} onClick={() => handleTabClick(3)} data-id="3">Konark Sun Temple</li>
              </ul>
              <ul className="tabitemresponsive" id='tabitmresponsive'>
                <Slide direction='left'>
                  <li className={activeTab === 0 ? 'actives' : ''} onClick={() => handleTabClick(0)} data-id="0">PURI</li> 
                <li className={activeTab === 1 ? 'actives' : ''} onClick={() => handleTabClick(1)} data-id="1">Lingaraja </li>
                </Slide> 
                <Slide direction='right'>
                  <li className={activeTab === 2 ? 'actives' : ''} onClick={() => handleTabClick(2)} data-id="2">Udayagiri</li> 
                  <li className={activeTab === 3 ? 'actives' : ''} onClick={() => handleTabClick(3)} data-id="3">Konark</li>
                </Slide>
              </ul>
            </div>
            <div className='container'>
              <div className="contentstyle">
                <div className={`box ${activeTab === 0 ? 'show' : 'hide'}`} data-content="0">
                  <div class="row">
                    <div class="col-md-6"><img src={puri} alt="" /></div>
                    <div class="col-md-6">   <div>
                      <h3>PURI</h3>
                      <p>
                        The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu–one of the trinity of supreme divinity in Hinduism. It is located in Puri in the state of Odisha, situated on the eastern coast of India. As per temple records, King Indradyumna of Avanti built the main temple of Jagannath at Puri.[2] The present temple was rebuilt from the tenth century onwards, on the site of the pre-existing temples in the compound, but not the main Jagannath temple, and begun by Anantavarman Chodaganga, the first king of the Eastern Ganga dynasty.
                      </p>
                      <h3>History</h3>
                      <p>The temple was rebuilt by the King of the Eastern Ganga dynasty, Anantavarman Chodaganga, in the 10th century CE, as described by the Kendupatna copper-plate inscription of his descendant, Narasimhadeva II.[1] Anantavarman was originally a Shaivite, and became a Vaishnavite sometime after he conquered the Utkala region, in which the temple is located, in 1112 CE. A 1134–1135 CE inscription records his donation to the temple. Therefore, the temple construction must have started sometime after 1112 CE.</p>
                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>

                <div className={`box ${activeTab === 1 ? 'show' : 'hide'}`} data-content="1">
                  <div class="row">
                    <div class="col-md-6"> <img className='lin' src={lingaraj} alt="" /></div>
                    <div class="col-md-6"><div className='ll'>
                      <h3>Lingaraj Temple</h3>
                      <p>
                        The Lingaraja temple is the largest temple in Bhubaneswar. The central tower of the temple is 180 ft (55 m) tall. The temple represents the quintessence of the Kalinga architecture and culminating the medieval stages of the architectural tradition at Bhubaneswar.[5] The temple is believed to be built by the kings from the Somavamsi dynasty, with later additions from the Ganga rulers. The temple is built in the Deula style that has four components namely, vimana (structure containing the sanctum), jagamohana (assembly hall), natamandira (festival hall) and bhoga-mandapa (hall of offerings), each increasing in the height to its predecessor. The temple complex has 108 other shrines and is enclosed by a large compound wall.
                      </p>
                      <h3>History</h3>
                      <p>The temple in its present form dates back to the last decade of the eleventh century. There is evidence that part of the temple was built during the sixth century CE as mentioned in some of the seventh century Sanskrit texts.[6] Fergusson believes that the temple might have been initiated by Lalat Indu Keshari who reigned from 615 to 657 CE. The Assembly hall (jagamohana), sanctum and temple tower were built during the eleventh century, while the Hall of offering (bhoga-mandapa) was built during the twelfth century. The natamandira was built by the wife of Salini between 1099 and 1104 CE.</p>
                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>

                <div className={`box ${activeTab === 2 ? 'show' : 'hide'}`} data-content="2">
                  <div class="row">
                    <div class="col-md-6"><img src={udaya1} alt="" /></div>
                    <div class="col-md-6">  <div>
                      <h3>Udayagiri Cave</h3>
                      <p>
                        The Udayagiri Caves are twenty rock-cut caves near Vidisha, Madhya Pradesh primarily denoted to the Hindu gods Vishnu and Shiva from the early years of the 3rd century CE to 5th century CE.[1][2] They contain some of the oldest surviving Hindu temples and iconography in India. They are the only site that can be verifiably associated with a Gupta period monarch from its inscriptions.[5] One of India's most important archaeological sites, the Udayagiri hills and its caves are protected monuments managed by the Archaeological Survey of India.
                      </p>
                      <h3>History</h3>
                      <p>The site at Udayagiri Caves was the patronage of Chandragupta II, who is widely accepted by scholars to have ruled the Gupta Empire in central India between c. 380-414 CE. The Udayagiri Caves were created in final decades of the 4th-century, and consecrated in 401 CE. This is based on three inscriptions.</p>
                      <p>A post-consecration Sanskrit inscription in Cave 6 by a Vaishnava minister, the inscription mentions Chandragupta II and "year 82" (old Indian Gupta calendar, c. 401 CE). This is sometimes referred to as the "inscription in Chandragupta cave" or the "Chandragupta inscription of Udayagiri".</p>
                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>

                <div className={`box ${activeTab === 3 ? 'show' : 'hide'}`} data-content="3">
                  <div class="row">
                    <div class="col-md-6"><img src={konark} alt="" /></div>
                    <div class="col-md-6"> <div>
                      <h3>Konark Sun Temple</h3>
                      <p>
                        Dedicated to the Hindu Sun-god Surya, what remains of the temple complex has the appearance of a 100-foot (30 m) high chariot with immense wheels and horses, all carved from stone. Once over 200 feet (61 m) high, much of the temple is now in ruins, in particular the large shikara tower over the sanctuary; at one time this rose much higher than the mandapa that remains. The structures and elements that have survived are famed for their intricate artwork, iconography, and themes, including erotic kama and mithuna scenes. Also called the Surya Devalaya, it is a classic illustration of the Odisha style of Architecture or Kalinga architecture.
                      </p>
                      <h3>History</h3>
                      <p>
                        Konark, also referred to in Indian texts by the name Kainapara, was a significant trading port by the early centuries of the common era. The current Konark temple dates to the 13th century, though evidence suggests that a sun temple was built in the Konark area by at least the 9th century. Several Puranas mention Surya worship centers in Mundira, which may have been the earlier name for Konark, Kalapriya (Mathura), and Multan (now in Pakistan) According to the Madala Panji, there was at one time another temple in the region built by Pundara Kesari. He may have been Puranjaya, the 7th-century ruler of the Somavamshi dynasty.
                      </p>
                      <Link href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></Link>
                    </div></div>
                  </div>


                </div>
              </div>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default Home;

