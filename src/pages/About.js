import React, { useState, useEffect } from "react";
// import image from '../image/puritemple.jpg'
import anugul from '../image/ANUGUL.jpg'
import Balangir from '../image/Balangir.jpg'
import Balasore from '../image/Balasore.jpg'
import Bargarh from '../image/Bargarh.jpg'
import Bhadrak from '../image/Bhadrak.jpg'
import Boudh from '../image/Boudh.jpg';
import cuttack from '../image/Cuttack.JPG';
import Debagarh  from '../image/Debagarh.jpg';
import Dhenkanal  from '../image/Dhenkanal.jpg';
import Gajapati  from '../image/Gajapati.jpg';
import { Slide } from "react-awesome-reveal";
import PulseLoader from "react-spinners/PulseLoader";



const About = () => {




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
          <PulseLoader loading={loaderStatus} size={50} color=" #fde02f" />
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
      <section className="banner2">
          {/* <img className="banner" src={image} alt /> */}
          <div className="banner-text-item">
          <Slide direction='down'>
            <div className="banner-heading">
              <h1>Explore The Beauty Of Odisha</h1>
            </div>
            </Slide>
            </div>
            </section>
      </>
        <>
        <div className="container sectionabout p-2 " >
  <ol className="ccardds__container" title="Blog entries">
    <li className="ccardd">
      
      <div className="ccardd__thumb">
        <Slide direction='left'> 
        <img className="animate" src={anugul} />
        </Slide></div>
       
      <div className="ccardd__content">
         <Slide direction='down'>
        <h3 className="ccardd__title">Anugul</h3>
        <p className="ccardd__text">Angul district; also known as Anugul, is one of the thirty districts of Odisha in eastern India. The city of Angul is the district headquarters of Angul district. </p>
         </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 1" href="#">
          <img src={anugul} alt /></a>
      </div>
     
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img className="animate" src={Balangir} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Balangir</h3>
        <p className="ccardd__text">Balangir District, also called Bolangir District, is a district situated in Odisha state of India. The district has an area of 6,575 km2 (2,539 sq mi), and a population of 1,648,997 (2011 census). </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='left'>
        <img className="animate" src={Balasore} /></Slide></div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Balasore</h3>
        <p className="ccardd__text">Balasore District, also known as Baleswar District, is an administrative district of Odisha state, in eastern India. Balasore is one of the coastal districts of Odisha and lies on the northernmost part of the state.</p>
        </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 3" href="#"><img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img className="animate" src={Bargarh} /></Slide></div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Bargarh</h3>
        <p className="ccardd__text">Bargarh District is an administrative district of Odisha state in eastern India. The city of Bargarh is its district headquarters. The district was carved out of the erstwhile district of Sambalpur on 1 April 1993.</p>
        </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 3" href="#"><img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='left'>
        <img className="animate" src={Bhadrak} /></Slide></div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Bhadrak</h3>
        <p className="ccardd__text">Bhadrak is a district of Odisha state in eastern India. Bhadrak city is the headquarters and the largest city of the district.</p>
        </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 3" href="#"><img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img className="animate" src={Boudh} /></Slide></div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Boudh</h3>
        <p className="ccardd__text">Boudh District is an administrative and a municipal district, one of the thirty in the Odisha, India. The district headquarters of the Boudh District is the city of Boudh.</p>
        </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 3" href="#"><img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='left'>
        <img className="animate" src={cuttack} /></Slide></div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Cuttack</h3>
        <p className="ccardd__text">Cuttack district is one of the 30 districts of Odisha state in India. It is located in the coastal part of the state and its administrative headquarters are located in the city of Cuttack. As of 2011 Census, after Ganjam, it is the second most populous district of Odisha (out of 30), with a population of 2,624,470.</p>
        </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 3" href="#"><img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img className="animate" src={Debagarh } /></Slide>
      </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Debagarh </h3>
        <p className="ccardd__text">Debagarh District also known as Deogarh District is a district of Odisha state, India. Located in the north-western part of the state, it is one of the 30 administrative districts and has its headquarters at Debagarh (Deogarh) town.</p>
        </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 4" href="#"><img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='left'>
        <img className="animate" src={Dhenkanal} /></Slide>
      </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Dhenkanal </h3>
        <p className="ccardd__text">Dhenkanal district is one of the centrally located districts in Odisha. It lies between Longitude: 85° 58' to 86° 2' East and Latitude: 20° 29' to 21° 11' North. The nearest airport is Biju Patnaik Airport located at a distance of 52.12 Km. .</p>
        </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 4" href="#"><img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img className="animate" src={Gajapati} /></Slide>
      </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Gajapati </h3>
        <p className="ccardd__text">Gajapati district is a district of Odisha State in India. It was created from Ganjam District on 2 October, 1992. As of 2011 it is the third least populous district of Odisha (out of 30), after Debagarh and Boudh.[1] The District is a part of the Red Corridor.</p>
        </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 4" href="#"><img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
  </ol>
</div>

        </>
</>
        )}
    </div>
  )
}

export default About