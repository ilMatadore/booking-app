import {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faTaxi, faDharmachakra, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';

import './Header.styles.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = ({type}) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 1,
        children: 0,
        rooms: 1
    })
    const navigate = useNavigate()

    const handleOptionsClick = (operation,e) => {
        if (operation === 'minus') {
            setOptions((prev) => ({...prev, [e.target.name]: options[e.target.name] - 1}))
        }
        if (operation === 'plus') {
            setOptions((prev) => ({...prev, [e.target.name]: options[e.target.name]+ 1}))
        }
    }
    const handleOpenClose = (e) => {
        if (e.target.id === 'options') {
            setOpenOptions(!openOptions)    
            setOpenDate(false)
        }
        if (e.target.id === 'dates') {
            setOpenOptions(false)    
            setOpenDate(!openDate)
        }
    }

    const handleSearch = () => {
        navigate('/hotels', {state: {destination, date, options}})
    }

  return (
    <div className='header'>
        <div className={type === 'list' ? "headerContainer listMode" : 'headerContainer'}>
            <div className='headerList'>
                <div className='headerListItem active'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rental</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faDharmachakra} />
                    <span>Attractions</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Aiport Taxi</span>
                </div>
            </div>
            {type !== 'list' &&
            <>
                <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
                <p className='headerDesc'>
                    Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking account.
                </p>
                <button className='headerBtn'>Sign in / Register</button>
                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input
                        type="text"
                        placeholder='Where are you going?'
                        className='headerSearchInput'
                        onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <span
                            id='dates'
                            onClick={(e) => handleOpenClose(e)}
                            className='headerSearchText'
                            >
                                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />}
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span
                            id='options'
                            className='headerSearchText'
                            onClick={(e) => handleOpenClose(e)}
                            >
                                {`${options.adults} adults - ${options.children} children - ${options.rooms} rooms`
                        }</span>
                        {openOptions && <div className='options'>
                            <div className='optionItem'>
                                <span className='optionText'>Adults</span>
                                <div className='optionCounter'>
                                    <button
                                        name='adults'
                                        className='optionCounterButton'
                                        onClick={(e) => handleOptionsClick('minus', e)}
                                        disabled={options.adults === 1}
                                    >
                                        -
                                    </button>
                                    <span className='optionCounterNumber'>{options.adults}</span>
                                    <button name='adults' className='optionCounterButton' onClick={(e) => handleOptionsClick('plus', e)}>+</button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Children</span>
                                <div className='optionCounter'>
                                    <button
                                        name='children'
                                        className='optionCounterButton'
                                        onClick={(e) => handleOptionsClick('minus', e)}
                                        disabled={options.children === 0}
                                    >
                                        -
                                    </button>
                                    <span className='optionCounterNumber'>{options.children}</span>
                                    <button name='children' className='optionCounterButton' onClick={(e) => handleOptionsClick('plus', e)}>+</button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Rooms</span>
                                <div className='optionCounter'>
                                    <button
                                    name='rooms'
                                    className='optionCounterButton'
                                    onClick={(e) => handleOptionsClick('minus', e)}
                                    disabled={options.rooms === 1}
                                    >
                                        -
                                    </button>
                                    <span className='optionCounterNumber'>{options.rooms}</span>
                                    <button name='rooms' className='optionCounterButton' onClick={(e) => handleOptionsClick('plus', e)}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className='headerSearchItem'>
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </>}
        </div>
    </div>
  )
}

export default Header;
