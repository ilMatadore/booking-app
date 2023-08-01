import './Hotel.styles.css';
import NavBar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import EmailList from '../../components/emailList/EmailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const photos = [
  {
    url: 'https://cf.bstatic.com/xdata/images/hotel/square600/438349362.webp?k=f67f0e7e54be1c0678f18cf9ae1271c4220a487901ae0bf906fed8ba0265e38d&o='
  },
  {
    url: "https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o="
  },
  {
    url: "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
  },
  {
    url: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
  },
  {
    url: "https://cf.bstatic.com/xdata/images/hotel/square600/280947638.webp?k=9e8f72c1ff91b261cdda3dbe4e1a70bef455dd72c00119ff379c671a65ad565d&o="
  },
  {
    url: "https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o="
  }
]

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (side) => {
    let carrouselSlideNumber;
    if (side === 'l') {
      carrouselSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }
    if (side === 'r') {
      carrouselSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(carrouselSlideNumber)
  }
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className='hotelContainer'>
        { open && 
        <div className='slider'>
          <FontAwesomeIcon icon={faCircleXmark} className='close'onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow'onClick={() => handleMove("l")}/>
          <div className='sliderWrapper'>
            <img src={photos[slideNumber].url} alt="" className='sliderImg'/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'onClick={() => handleMove("r")}/>
        </div>}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 124 New York</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $113 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo, _idx) => (
              <div className='hotelImgWrapper' key={_idx}>
                <img onClick={() => handleOpen(_idx)} src={photo.url} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Stay in the heart of Krakow</h1>
              <p className='hotelDesc'>
                Rajska Residence is a recently renovated apartment in the center of Krakow, a 9-minute walk from National Museum of Krakow and half a mile. 
                Among the facilities at this property are an elevator and daily room service, along with free Wifi throughout the property. 
                Stadion Miejski Cracovii is a 16-minute walk away, and Wisla Krakow Stadium is 0.6 miles from the apartment.
                The apartment complex will provide guests with air-conditioned units with a wardrobe, a coffee machine, a fridge, 
                a stovetop, a safety deposit box, a flat-screen TV, and a private bathroom with a walk-in shower. 
                There's a fully equipped kitchenette with kitchenware and kettle. At the apartment complex, all units are equipped with a seating area.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Property Highlights</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 10.0!</span>
              <h2>
                <b>$960</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <EmailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel;
