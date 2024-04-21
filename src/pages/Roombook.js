import React, {useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Roombook = () => {
  const initialFormData = {
    price: "",
    checkIn: "",
    checkOut: "",
    noGuest: "",
    noRoom: "",
    mobileNumber: "",
    email: ""
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
    const subject = 'Booking Confirmation';
    let body = '';
    for (const key in formData) {
      body += `${key}: ${formData[key]}\n`;
    }
    const mailtoLink = `mailto:nigammishra826@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    sendEmail();
    
  };



  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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


<button
          className={showButton ? "show" : ""}
          onClick={scrollToTop}
          id="button"
        >
        </button>
        <div className="landing-page p-t80">
            <img className="Top_most" src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f4317cf1-564c-43a7-a40a-37e705efe473/89c15330-4099-4880-a6d2-0b15a547e71f?org_if_sml=1972044&force_format=original" alt="Landing Page Picture" />
          </div>
          <div id="wrapper">
          </div>
         
          <div className="container">
            <div className="row" id="room-image ">
              <Slider {...settings1}>
                <div class="col-md-4">
                  <img id="room-image" src="https://c4.wallpaperflare.com/wallpaper/844/53/319/miami-florida-hotel-room-wallpaper-preview.jpg" alt="Room Image" /></div>
                <div class="col-md-4">
                  <img id="room-image" src="https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_640.jpg" alt="Room Image" /></div>
                <div class="col-md-4">
                  <img id="room-image" src="https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_640.jpg" alt="Room Image" /></div>
                <div class="col-md-4">
                  <img id="room-image" src="https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_640.jpg" alt="Room Image" /></div>
                <div class="col-md-4">
                  <img id="room-image" src="https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_640.jpg" alt="Room Image" /></div>
              </Slider>
            </div>
          </div>
          <section id="booking-confirmation">
            <div className="booking-confirmation-text">
              <h1>Booking Confirmation</h1>
            </div>
          </section>
      <div>
        <div className="royal-suite">
          <h1>Royal Suite</h1>
        </div>
        <div id="a-i-text-container">
          <div id="a-i-text">Amenities &amp; Inclusions</div>
        </div>
        <div id="a-i-container">
          <div id="amenities-inclusions" className="rounded-box">
            <ul className="column">
              <li> Private Entrance</li>
              <li> Spacious Living Area</li>
              <li>Limousine Service</li>
              <li>In-Room Spa Services</li>
            </ul>
            <ul className="column">
              <li>Exclusive Terrace or Balcony</li>
              <li>Private Bar and Lounge</li>
              <li>Walk-in Closet</li>
              <li>State-of-the-Art Entertainment System</li>
            </ul>
          </div>
        </div>
        

        <form onSubmit={handleSubmit}>
          <div className="input-container1">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  onChange={handleChange}
                  value={formData.price}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="check-in">
                  <img src="check_in_icon_url" alt="Icon" />Check in
                </label>
                <input
                  type="date"
                  id="check-in"
                  name="checkIn"
                  onChange={handleChange}
                  value={formData.checkIn}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="check-out">
                  <img src="check_out_icon_url" alt="Icon" />Check out
                </label>
                <input
                  type="date"
                  id="check-out"
                  name="checkOut"
                  onChange={handleChange}
                  value={formData.checkOut}
                />
              </div>
            </div>
            <div className="row" style={{ paddingTop: "30px" }}>
              <div className="column">
                <label htmlFor="no-guest">No. of Guest</label>
                <input
                  type="text"
                  id="no-guest"
                  name="noGuest"
                  onChange={handleChange}
                  value={formData.noGuest}
                />
              </div>
              <div className="column">
                <label htmlFor="no-room">
                  <img src="no_room_icon_url" alt="Icon" />No. of Room
                </label>
                <input
                  type="text"
                  id="no-room"
                  name="noRoom"
                  onChange={handleChange}
                  value={formData.noRoom}
                />
              </div>
            </div>
            <div className="row" style={{ paddingTop: "30px" }}>
              <div className="column">
                <label htmlFor="mobile-number">Mobile Number</label>
                <input
                  type="text"
                  id="mobile-number"
                  name="mobileNumber"
                  onChange={handleChange}
                  value={formData.mobileNumber}
                />
              </div>
              <div className="column">
                <label htmlFor="email">E-mail</label>
                <input
                  placeholder="xyz@gmail.com"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
          </div>

          <div id="confirm-booking-container">
            <button type="submit" id="confirm-booking-btn">
              CONFIRM BOOKING
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Roombook;
