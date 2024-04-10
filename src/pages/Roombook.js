import React from "react";
import imga from "../image/room1.webp";
import imga1 from "../image/room1.webp";
import imga2 from "../image/room1.webp";

const Roombook = () => {
  return (
    <div>
      <>
      <div style={{ display: "flex", marginTop: "7%" }} className="container">
        <div style={{ paddingRight: "5%" }} className="col-sm-7 boxx">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={imga} className="d-b123 w-100 " alt="..." />
              </div>
              <div className="carousel-item">
                <img src={imga1} className="d-b123 w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={imga2} className="d-b123 w-100" alt="..." />
              </div>
            </div>
          </div>
          <section>
            <h2 className="Decription123">Decription :-</h2>
            <p className="Located123 ">
              Located within 8.2 miles of Qutub Minar and 8.6 miles of MG Road,
              Hotel Tej Palace Near IGI Airport Delhi provides rooms in New
              Delhi. This 4-star hotel offers room service, an ATM and free
              WiFi. There is free private parking and the property has paid
              airport shuttle service.
            </p>
            <p className="Located123 ">
              All rooms at the hotel have air conditioning, a flat-screen TV
              with satellite channels, Blu-ray player, and a private bathroom
              with a bidet, free toiletries and a hairdryer. The rooms have a
              safety deposit box, while some rooms also feature a terrace and
              others also feature city views. At Hotel Tej Palace Near IGI
              Airport Delhi every room includes bed linen and towels.
            </p>
            <p className="Located123 ">
              Rashtrapati Bhavan is 10 miles from the accommodation, while
              Gandhi Smriti is 10 miles from the property. The nearest airport
              is Delhi International Airport, a few steps from Hotel Tej Palace
              Near IGI Airport Delhi.
            </p>
          </section>
          <section>
            <h4 className="Decription123">Most popular facilities :-</h4>
            <div style={{ display: "flex" }} className="col-sm-6 boxx">
              <p style={{ paddingRight: "3%" }} className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-wifi facilities123"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049" />
                  <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                  ree Wifi
                </svg>
                <p className="texx">Free Wifi</p>
              </p>
              <p style={{ paddingRight: "3%" }} className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-airplane-engines facilities"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z" />
                </svg>
                Airport shuttle
              </p>
              <p style={{ paddingRight: "3%" }} className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-p-circle-fill facilities"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002V12h1.283V9.164h1.668C10.033 9.164 11 8.08 11 6.586c0-1.482-.955-2.584-2.538-2.584zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                </svg>
                Free Paking
              </p>
            </div>
            <div style={{ display: "flex" }} className="col-sm-6 boxx">
              <p style={{ paddingRight: "3%" }} className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-standing-dress facilities"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 12.25V12h1v3.25a.75.75 0 0 0 1.5 0V12h1l-1-5v-.215a.285.285 0 0 1 .56-.078l.793 2.777a.711.711 0 1 0 1.364-.405l-1.065-3.461A3 3 0 0 0 8.784 3.5H7.216a3 3 0 0 0-2.868 2.118L3.283 9.079a.711.711 0 1 0 1.365.405l.793-2.777a.285.285 0 0 1 .56.078V7l-1 5h1v3.25a.75.75 0 0 0 1.5 0Z" />
                </svg>
                Laundry
              </p>
              <p style={{ paddingRight: "3%" }} className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cup-hot facilities"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175"
                  />
                  <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
                </svg>
                Wonderful Breakfast
              </p>
              <p style={{ paddingRight: "3%" }} className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-car-front-fill  facilities"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                </svg>
                Car Rent
              </p>
            </div>
            <h4 className="Decription123">Hotel area info :-</h4>
            <div style={{display:"flex"}} className="contaier">
            <div className="col-sm-4 boxx">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-walking FARM123"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
              </svg>
              <p>SHAHABAD MUHAMMADPUR</p>
              <p>Poolside Garden</p>
              <p>KUMAR FARM</p>
              <p>SPG Central Park</p>
              <p>Central Park SPG Complex</p>
              <p>BIJWASAN KAPASHERA</p>
              <p>Rose Garden</p>
            </div>
            <div className="col-sm-4 boxx">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-train-front FARM123"
                viewBox="0 0 16 16"
              >
                <path d="M5.621 1.485c1.815-.454 2.943-.454 4.758 0 .784.196 1.743.673 2.527 1.119.688.39 1.094 1.148 1.094 1.979V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V4.583c0-.831.406-1.588 1.094-1.98.784-.445 1.744-.922 2.527-1.118m5-.97C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7 1a1 1 0 1 0-1-1 1 1 0 1 0-2 0 1 1 0 0 0 2 0 1 1 0 0 0 1 1M4.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3V5zm4 0v3h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM3 5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
              </svg>
              <p>SubwayIndira Gandhi International Airport</p>
              <p>TrainShahabad Mohammadpur</p>
              <p>SubwayDwarka Sector 8</p>
              <p>TrainPalam</p>
              <p>BusMaharana Pratap Inter State Bus Terminus</p>
            </div>
            <div style={{paddingLeft:"3%"}} className="col-sm-4 boxx">
              <h3>Top attractions :-</h3>
              <p>National Rail Museum</p>
              <p>Qutub Minar</p>
              <p>Tughlaqabad Fort</p>
              <p>Tughlaqabad Fort</p>
              <p>National Gandhi Museum</p>
            </div>
            </div>
          </section>
        </div>
        <div className="col-sm-5 boxx">
      <form className="form1">
  <fieldset>
    <legend>Personal data</legend>
    <div className="double-input">
      <div className="form-input-container">
        <label htmlFor="fname">First name</label>
        <input type="text" name="firstname" id="fname" placeholder="Jan" minLength={3} required />
      </div>
      <div className="form-input-container">
        <label htmlFor="lname">Last name</label>
        <input type="text" name="lastname" id="lname" placeholder="Kowalski" required />
      </div>
    </div>
    <div className="double-input">
      <div className="form-input-container">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required placeholder="jan.kowalski@gmail.com" />
      </div>
      <div className="form-input-container">
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" placeholder="213 742 069" required />
      </div>
    </div>
  </fieldset>
  <fieldset>
    <legend>Room details</legend>
    <div className="double-input">
      <div className="form-input-container">
        <label htmlFor="hotelcity">City</label>
        <select name="hotelcity" id="hotelcity">
          <option value="Wroclaw">Wroclaw</option>
          <option value="Warsaw">Warsaw</option>
          <option value="Plock">Plock</option>
          <option value="Krakow">Krakow</option>
        </select>
      </div>
      <div className="form-input-container">
        <label htmlFor="capacity">For (capacity)</label>
        <input type="number" name="capacity" id="capacity" defaultValue={1} min={1} max={10} step={1} />
      </div>
    </div>
    <div className="double-input">
      <div className="form-input-container date-select">
        <label htmlFor="startdate">Start date</label>
        <select name="start-date-day" id="start-date-day">
          <option value="Day" disabled selected>Day</option>
          <option value={1}>1</option>
        </select>
        <select name="start-date-month" id="start-date-month">
          <option value="Month" disabled selected>Month</option>
          <option value={1}>01</option>
        </select>
      </div>
      <div className="form-input-container date-select">
        <label htmlFor="enddate">End date</label>
        <select name="end-date-day" id="end-date-day">
          <option value="Day" disabled selected>Day</option>
          <option value={1}>1</option>
        </select>
        <select name="end-date-month" id="end-date-month">
          <option value="Month" disabled selected>Month</option>
          <option value={1}>01</option>
        </select>
      </div>
    </div>
  </fieldset>
  <button className="submit1" type="submit">Submit a request</button>
</form>

        </div>
      </div>
    </>
    </div>
  );
};

export default Roombook;
