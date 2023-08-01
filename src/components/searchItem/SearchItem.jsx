import { useNavigate } from 'react-router-dom';
import './SearchItem.styles.css'

const SearchItem = () => {
    const navigate = useNavigate()
  return (
    <div className='searchItem'>
        <img
        alt=""
        className='siImg'
        src="https://cf.bstatic.com/xdata/images/hotel/square600/280947638.webp?k=9e8f72c1ff91b261cdda3dbe4e1a70bef455dd72c00119ff379c671a65ad565d&o=" />
        <div className='siDesc'>
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className='siDistance'>500m from center</span>
            <span className='siTaxiOp'>Free Airport taxi</span>
            <span className='siSubtitle'>
                Studio Apartment with air conditioning
            </span>
            <span className='siFeatures'>
                Entire studio | 1 bathroom | 21m2 full bed
            </span>
            <span className='siCancelOp'>Free Cancelation</span>
            <span className='siCancelOpSubTitle'>
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className='siDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailsTexts'>
                <span className='siPrice'>$123</span>
                <span className='siTaxOp'>Includes taxes and fees</span>
                <button className='siCheckButton' onClick={() => navigate('/hotels/1')}>See Availability</button>
            </div>
        </div>

    </div>
  )
}

export default SearchItem;
