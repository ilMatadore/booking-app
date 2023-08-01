import './FeaturedProps.styles.css'

const FeaturedProps = () => {
  return (
    <div className='fp'>
        <div className='fpItem'>
            <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" />
            <span className='fpName'>Aparthotel Stare Miasto</span>
            <span className='fpCity'>Madrid</span>
            <span className='fpPrice'>Starting at $120</span>
            <div className='fpRating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='fpItem'>
            <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" />
            <span className='fpName'>7Seasons Budapest</span>
            <span className='fpCity'>Budapest</span>
            <span className='fpPrice'>Starting at $110</span>
            <div className='fpRating'>
                <button>8.1</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='fpItem'>
            <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" />
            <span className='fpName'>Casa Portuguesa Prata</span>
            <span className='fpCity'>Lisboa</span>
            <span className='fpPrice'>Starting at $100</span>
            <div className='fpRating'>
                <button>8.0</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='fpItem'>
            <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/438349362.webp?k=f67f0e7e54be1c0678f18cf9ae1271c4220a487901ae0bf906fed8ba0265e38d&o=" />
            <span className='fpName'>Sloane Club</span>
            <span className='fpCity'>London</span>
            <span className='fpPrice'>Starting at $300</span>
            <div className='fpRating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProps;
