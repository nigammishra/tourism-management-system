import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import odishatour from "../image/Odisha-tour.jpg";
import guideimage from "../image/guide.png";
import trust from "../image/NicePng_travel-logo-png_3200042.png";
import travel from "../image/Travel-PNG-Image-HD.png";
import travelhappy from "../image/clipart4216475.png";
import Odishapng from "../image/OdishaTourism1.png";
import puri from "../image/puritemple.jpg";



const Home = () => {
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
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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




  // 3D image cards design



  
  return (
    <div>

      <>

        <section className="banner">
          {/* <img className="banner" src={odishatour} alt /> */}
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
              <a href="#" className="book">
                book
              </a>
            </form>
          </div>
        </section>
      </>

      <>
      <div className="container">
          <h3 class="head3 spacing secondary-color text-center text-uppercase"style={{top:'130px', position:'relative' }} >
           Travel With Us
          </h3>
          <h2 class=" head2 spacing secondary-color text-center text-uppercase" style={{top:'150px', position:'relative' }} >
            Visit The Best Places Ever
          </h2>
        </div>
        <section className="py-4 services">
          <div className="container text-center partner">
            {/* <h1>Tourism</h1> */}
            <div className="partner-items">
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
        <div className="container-fluid">
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
        <section className="about">
          <div className="about-img">
            <img src={puri} />
          </div>
          <div className="about-text">
            <small>The Beauty of Odisha</small>
            <h2>We are Go Trip Ravels Support Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/> sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <label>
              {/* <input type="checkbox" defaultChecked /> */}
              Lorem ipsum dolor sit amet
            </label>
            <label>
              {/* <input type="checkbox" defaultChecked /> */}
              consectetur adipisicing elit
            </label>
            <label>
              {/* <input type="checkbox" defaultChecked /> */}
              Architecto atque consequuntur
            </label>
            <label>
              {/* <input type="checkbox" defaultChecked /> */}
              cupiditate doloremque ducimus
            </label>
            <a href=""><button class="custom-btn btn-12"><span>Click!</span><span>Read More</span></button></a>
          </div>
        </section>
      </>
      <>
        <div className="container">
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
                     For travelers from different parts of the world, there are different accommodations, such as Daringbadi Nature Camp and Belghar Nature Camp.{" "}
                  </p>
                  <a href="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </a>
                </div>
              </li>
              {/* Repeat the rest of the list items similarly */}
              <li className="item1 secondimg">
                <div className="content1">
                  <h2 className="title"> Udayagiri and Kandagiri Caves</h2>
                  <p className="description">
                    {" "}
                    <p>These are the locations where religion, art, and rock-cut building abound. A pleasant location to take your family is the two hills, which rise sharply from the coastal plain and are divided by a highway around six kilometers west of Bhubaneswar. Among the tourists this is one of the <strong>top place to visit in Odisha. </strong>It has a great deal of historical significance and resembles little Ajanta Ellora caves.</p>
                  </p>
                  <a href="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </a>
                </div>
              </li>
              <li className="item1 thirdimg">
                <div className="content1">
                  <h2 className="title"> Konark</h2>
                  <p className="description">
                    {" "}
                    The Sun Temple in Konark is one of India's most exquisite temples and an architectural wonder.
                     This is the best place to visit in Odisha! The Annual Dance Festival is a five-day cultural spectacle that brings together exceptional dance talent from throughout the nation. This festival honors the diverse dance styles that our nation has created and is a spectacular celebration of our nation's rich cultural and artistic heritage.
                  </p>
                  <a href="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </a>
                </div>
              </li>
              <li className="item1 fourthimg">
                <div className="content1">
                  <h2 className="title">Chandipur: Seaside Serenity</h2>
                  <p className="description">
                  There is no beach like Chandipur. At low tide, the beach retreats up to 5 km, allowing people to stroll on the ocean floor. The beach's equally unusual biodiversity is supported by this unique phenomena.Among other things, it is home to sea urchins, starfish, and endangered horse shoe crabs. The beach's dirty water makes it unsuitable for swimming.
                  </p>
                  <a href="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </a>
                </div>
              </li>
              <li className="item1 fivthimg">
                <div className="content1">
                  <h2 className="title"> Barbil: Mining Town with Rustic Charm</h2>
                  <p className="description">
                  Barbil, located in the Odisha district of Kendujhar/Keonjhar, is a well-liked tourist site and a spot for honeymoon in Odisha.
                   It is located along the Karo River's bank.
                   Barbil is a well-liked location with a special fusion of history, mythology, and scenic beauty.
                  </p>
                  <a href="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </a>
                </div>
              </li>
              <li className="item1 sixthimg">
                <div className="content1">
                  <h2 className="title">Shri Jagannatha Temple</h2>
                  <p className="description">
                    {" "}
                    The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu–one of the trinity of supreme divinity in Hinduism
                    The temple is famous for its annual Ratha Yatra, or chariot festival, in which the three principal deities are pulled on huge and elaborately decorated raths, or temple cars.
                  </p>
                  <a href="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </a>
                </div>
              </li>
            </ul>
            <nav className="navstyle">
              <button className="custom-btn btn-9 prev" onClick={activate}>
                Previous
              </button>
              <button className="custom-btn btn-9 next" onClick={activate}>
                Next
              </button>
            </nav>
          </main>
        </div>
      </>

      <>
        <div className="container">
          <h3 class="head3 spacing secondary-color text-center text-uppercase">
            Art& Architectures of
          </h3>
          <h2 class=" head2 spacing secondary-color text-center text-uppercase">
            Odisha
          </h2>
        </div>
         
<div className='container-fluid'>
        <div className="wrapper-design">
  <div className="item-styles">
    <div className="item-style img1" tabIndex={0} />
    <div className="item-style img2" tabIndex={0} />
    <div className="item-style img3" tabIndex={0} />
    <div className="item-style img4" tabIndex={0} />
    <div className="item-style img5" tabIndex={0} />
    <div className="item-style img6" tabIndex={0} />
    <div className="item-style img7" tabIndex={0} />
    <div className="item-style img8" tabIndex={0} />
    <div className="item-style img9" tabIndex={0} />
    {/* <div className="item-style img10" tabIndex={0} /> */}
    </div>
  </div>
</div>

       
      </>
      <>
      <div className="container">
      <h2 class=" head2 spacing secondary-color text-center text-uppercase">
           Most Loveble Places In Odisha
          </h2>
        </div>
      <ul className="tabitem">
        <li className={activeTab === 0 ? 'actives' : ''} onClick={() => handleTabClick(0)} data-id="0">PURI</li>
        <li className={activeTab === 1 ? 'actives' : ''} onClick={() => handleTabClick(1)} data-id="1">Lingaraja Temple </li>
        <li className={activeTab === 2 ? 'actives' : ''} onClick={() => handleTabClick(2)} data-id="2">Udayagiri Caves</li>
        <li className={activeTab === 3 ? 'actives' : ''} onClick={() => handleTabClick(3)} data-id="3">Konark Sun Temple</li>
      </ul>

      <div className="contentstyle">
        <div className={`box ${activeTab === 0 ? 'show' : 'hide'}`} data-content="0">
          <img src={puri} alt="" />
          <div>
            <h3>PURI</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni iure
              a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
              sequi perferendis veritatis! Voluptatem?
            </p>
            <a href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></a>
          </div>
        </div>

        <div className={`box ${activeTab === 1 ? 'show' : 'hide'}`} data-content="1">
          <img src={puri} alt="" />
          <div>
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni iure
              a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
              sequi perferendis veritatis! Voluptatem?
            </p>
            <a href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></a>
          </div>
        </div>

        <div className={`box ${activeTab === 2 ? 'show' : 'hide'}`} data-content="2">
          <img src={puri} alt="" />
          <div>
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni iure
              a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
              sequi perferendis veritatis! Voluptatem?
            </p>
            <a href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></a>
          </div>
        </div>

        <div className={`box ${activeTab === 3 ? 'show' : 'hide'}`} data-content="3">
          <img src={puri} alt="" />
          <div>
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni iure
              a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
              sequi perferendis veritatis! Voluptatem?
            </p>
            <a href="#"><button class="custom-btn btn-8 btnstyle"><span>Explore More...</span></button></a>
          </div>
        </div>
      </div>
      </>
    </div>
  );
};

export default Home;

