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
import Ganjam  from '../image/ganjam.jpg';
import Jagatsinghpur  from '../image/Jagatsinghpur.jpg';
import Jajpur  from '../image/Dashashwamedh-Ghat-Jajpur.jpg';
import Jharsuguda  from '../image/Jharsuguda.jpg';
import Kalahandi   from '../image/Kalahandi.jpeg';
import Kandhamal  from '../image/Kandhamal.jpg';
import Kendrapara  from '../image/Kendrapara.jpg';
import Khordha  from '../image/Khordha.jpg';
import Koraput  from '../image/Koraput.jpg';
import Malkangiri  from '../image/Malkangiri.jpg';
import Mayurbhanj  from '../image/Mayurbhanj.jpg';
import Nabarangpur  from '../image/Nabarangpur.png';
import Nayagarh  from '../image/Nayagarh.jpg';
import Nuapada  from '../image/Nuapada.jpg';
import Puri  from '../image/Puri.jpg';
import Rayagada  from '../image/Rayagada.jpg';
import Sambalpur  from '../image/Sambalpur.jpg';
import Subarnapur  from '../image/Subarnapur.jpg';
import Sundergarh  from '../image/Sundergarh.jpg';
import { Slide } from "react-awesome-reveal";
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

  return (
    <div>
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
        <img style={{height:'500px'}} className="animate" src={Bhadrak} /></Slide></div>
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
        <img style={{height:'500px'}} className="animate" src={Debagarh } /></Slide>
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
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Ganjam} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Ganjam</h3>
        <p className="ccardd__text">Ganjam district is a district in the Indian state of Odisha. Ganjam's total area is 8,206 km² (3,168 mi²). The district headquarters is Chhatrapur. Ganjam is divided into three sub-divisions Chhatrapur, Berhampur, and Bhanjanagar. The Imperial Gazetteer of India 1908 lists Ganjam, along with the Thanjavur and South Canara districts, as the three districts of the Madras Presidency where Brahmins were most numerous.</p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img  style={{height:'500px'}} className="animate" src={Jagatsinghpur} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Jagatsinghpur</h3>
        <p className="ccardd__text">Jagatsinghpur District is one of the thirty districts of Odisha in the eastern coast of India. It became a new district on 1 April 1993 being separated from Cuttack district with its own headquarter in Jagatsinghpur town. Deltaic and partly littoral; the district of Jagatsinghpur is triangular in shape and small in geographical proportions. It is the smallest district in the state and covers a landmass of 1759 km2 </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img  style={{height:'500px'}} className="animate" src={Jajpur} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Jajpur</h3>
        <p className="ccardd__text">Jajpur (listenⓘ) is a district of Odisha state in eastern India. The Odisha Government carried out a re-organisation of districts of Odisha in 1993. The erstwhile Cuttack district was split into multiple districts with Jajpur being one of them. The district came into being on 1 April 1993. </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Kalahandi} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Kalahandi</h3>
        <p className="ccardd__text">Archaeological evidence of Stone Age and Iron Age human settlement has been recovered from the region.[3] Asurgarh offered an advanced, well civilised, cultured and urban human settlement about 2000 years ago in the region.[4] In South Asia it is believed that the lands of Kalahandi district and Koraput district were the ancient places where people started cultivation of paddy.  </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Kandhamal} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Kandhamal</h3>
        <p className="ccardd__text">Kandhamal district also known as Phulbani district is a district in the state of Odisha, India. The District headquarters of the district is Phulbani. It is a district full with natural beauties includes wild animals and birds. </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Kendrapara} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Kendrapara</h3>
        <p className="ccardd__text">Kendrapara District is an administrative district of Odisha state in eastern India. The town of Kendrapara is the district headquarters. Kendrapara District is situated in the eastern portion of the state, and is bounded on the north by Bhadrak district, on the east by the Bay of Bengal, on the south by Jagatsinghpur District, on the west by Cuttack District on the northwest by Jajpur District. </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Khordha} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Khordha</h3>
        <p className="ccardd__text">Khordha district is an administrative division of the state of Odisha, India. It was formed on April 1, 1993, by the division of former Puri District into Puri, Khordha and Nayagarh districts. In the year 2000 the district name was changed to Khordha. The district headquarters is Khordha Town. The capital city of Bhubaneswar is located in this district.[2] Khordha is the most urbanized of all the districts of Odisha. </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Koraput} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Koraput</h3>
        <p className="ccardd__text">Koraput district is a district of India in southern Odisha, with headquarters at Koraput. The district is located in the Eastern Ghats and is known for its hilly terrain, rich and diverse types of mineral deposits and its tribal culture and traditions. The district headquarters town of Koraput and its largest city, Jeypore are major centres of trade and commerce for South Odisha and fall on an important road connecting Visakhapatnam to Raipur. </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Malkangiri} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Malkangiri</h3>
        <p className="ccardd__text">Local legend claims Valmiki wrote the Ramayana on the banks of the Tamasa river. The region was known as Malyavantagiri in the Ramayana, and it was believed Sitakunda was the bathing-place of Sita, near Mudulipada. Local legend claims the Pandavas spent a year in exile in the dense forests of Malkangiri.</p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Mayurbhanj} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Mayurbhanj</h3>
        <p className="ccardd__text">Mayurbhanj district is one of the 30 districts in the Odisha state of eastern India. It holds the distinction of being the largest district in Odisha by area.[3] The district's headquarters is located in Baripada, with other major towns including Rairangpur, Karanjia, and Bahalda. As of 2011, Mayurbhanj ranks as the third-most populous district in Odisha, following Ganjam and Cuttack.</p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Nabarangpur} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Nabarangpur</h3>
        <p className="ccardd__text">Balangir District, also called Bolangir District, is a district situatNabarangpur district, also known as Nabarangapur district or Nawarangpur district, is a district of Odisha, India. The city of Nabarangpur is the district capital. Most of its population is tribal and the land is heavily forested. It borders Kalahandi and Koraput districts. Nabarangpur district is situated at 19.14′ latitude and 82.32′ longitude at an average elevation of 572 metres (1,877 ft). </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img className="animate" src={Nayagarh} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Nayagarh</h3>
        <p className="ccardd__text">Nayagarh district is one of the 30 districts of Odisha state in eastern India. It was created in 1st April 1993[2] when the erstwhile Puri District was split into three distinct districts, namely Khordha, Nayagarh and Puri. </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Nuapada} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Nuapada</h3>
        <p className="ccardd__text">Nuapada district is an area of Odisha state in India. Nuapada town is the headquarters of the district. It has one subdivision: Nuapada, and five blocks: Khariar, Sinapali, Boden, Komna, and Nuapada. Nuapada District has three Notified Area Councils: Khariar, Khariar Road, and Nuapada, six tehsils and more villages such as Gandabahali, Tukla, Hatibandha, Duajher, Bargaon, Tarbod, Udyanbandh, and Larka. </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Puri} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Puri</h3>
        <p className="ccardd__text">Puri district is a coastal district of the Odisha state of India. It has one sub-division, 11 tahasils and 11 blocks and comprises 1722 revenue villages. Puri is the only municipality of the district. Konark, Pipili, Satyabadi, Gop, Kakatpur and Nimapada are the NACs in this district while Brahmagiri being a semi-urban town.</p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Rayagada} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Rayagada</h3>
        <p className="ccardd__text">
Rayagada district is a district in southern Odisha, a state in India, which became a separate district in October 1992. Its population consists mainly of tribes, primarily the Khonds and the Soras. In addition to Odia, Kui and Sora are spoken by the district's indigenous population. It was founded by Maharajah Biswanatha Deba Gajapati of the Surjyabansha dynasty of Jeypore. </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Sambalpur} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Sambalpur</h3>
        <p className="ccardd__text">Sambalpur District is a district in the western part of state of Odisha, India. The historic city of Sambalpur is the district headquarters.

The district is located in the Mahanadi River basin. It has a total area of 6,702 km2 (2,588 sq mi), of which almost 60% of the district is covered in dense forest. The district is bounded by Deogarh District to the east, Bargarh and Jharsuguda districts to the west, Sundergarh District to the north, and Subarnapur and Angul districts in the south.</p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Subarnapur} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Subarnapur</h3>
        <p className="ccardd__text">Subarnapur District, also called Sonepur District or Sonapur District, is an administrative district in Odisha state in eastern India. The town of Sonepur is the district headquarters. Sonepur is known as the Mandiramalini town (city of temples) of Odisha with more than hundred temples. The people of the Sonepur region are referred to as Sonepuria. </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
    <li className="ccardd">
      <div className="ccardd__thumb">
      <Slide direction='right'>
        <img style={{height:'500px'}} className="animate" src={Sundergarh} />
</Slide>
        </div>
      <div className="ccardd__content">
      <Slide direction='down'>
        <h3 className="ccardd__title">Sundergarh</h3>
        <p className="ccardd__text">Sundargarh district is bounded by Raigarh district of Chhattisgarh in the west, Jashpur district of Chhattisgarh in the North-West, Simdega district of Jharkhand in the North, West Singhbhum district of Jharkhand and Keonjhar district of Odisha in the east and Jharsuguda, Sambalpur, Deogarh and Angul districts of Odisha in the South.  </p>
          </Slide><a className="ccardd__btn" aria-label="Read more about ccardd Title 2" href="#">
            <img src="https://travelhelp.co/story/wp-content/uploads/2019/02/img2.jpg" alt /></a>
      </div>
    </li>
  </ol>
</div>
        
        </>
    </div>
  )
}

export default About